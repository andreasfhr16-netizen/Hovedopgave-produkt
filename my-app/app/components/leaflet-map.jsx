"use client"

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState, useEffect } from 'react';
import Epreview from "./event-preview";

//ikon størrelse og grafik samt lokation
let DefaultIcon = L.icon({
  iconUrl: icon.src ?? icon,
  shadowUrl: iconShadow.src ?? iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon



//2 modes / tilstande: "view" bruges til at vælge en lokation, "search" bruges til at vise events i nærheden

//"view" mode: lytter efter klik og sender koordinaterne videre
function LocationMarker({ onLocationSelect, mode }) {
  
  const [position, setPosition] = useState(null);



  useMapEvents({
    click: async (e) => {
      if (mode !== "view") return;

      const { lat, lng } = e.latlng;
      console.log({ lat, lng });
      setPosition({ lat, lng });

      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
      const data = await res.json();

      const houseNr = data.address.house_number ?? "";
      const streetName = data.address.road ?? "";
      const eventCity = data.address.suburb ?? "";
      const eventPostcode = data.address.postcode ?? "";

      const eventLocation = " " + houseNr + " " + streetName + " " + eventCity + " " + eventPostcode;

      onLocationSelect({ lat, lng, name: eventLocation });
    },
  });

  if (mode !== "view") return null;
  return position ? <Marker position={[position.lat, position.lng]} /> : null;
}





//"search" mode: henter events koordinater fra endpoint og viser dem som markører
function EventMarkers({ mode }) {
  const [events, setEvents] = useState([]);

const [viseventitem, setViseventitem] = useState(false);
  //tjekker om mode er "search" og henter events fra endpointet, hvis det er tilfældet
  useEffect(() => {
    
    if (mode !== "search") return;

  
    const event_response = async () => {
      const response = await fetch("/api/get_events/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Events modtaget:", data);
      setEvents(data);
    };

    event_response();
  }, [mode]);

  if (mode !== "search") return null;





//går igennem et array af event objrkter og returnerer en marker for hvert registrert event udfra koordianter gemt i supsbase
return events.map((eventitem) => {
  if (!eventitem.Event_lat || !eventitem.Event_lng) return null;

  return (
    <Marker
      key={eventitem.id}
      position={[eventitem.Event_lat, eventitem.Event_lng]}
      eventHandlers={{
        click: () => setViseventitem(true)
      }}
    >
      <Popup>
        {viseventitem && <Epreview event={eventitem} />}
      </Popup>
    </Marker>
  );
});


 
}


export default function EventMap({ onLocationSelect, mode }) {
  return (
    /*start koordinat for map komponent vises som en lille kort markering*/
    <MapContainer center={[55.6338, 12.4751]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <LocationMarker onLocationSelect={onLocationSelect} mode={mode} />
      <EventMarkers mode={mode} />
    </MapContainer>
  );


}