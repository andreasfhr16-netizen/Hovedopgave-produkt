"use client"

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';

//ikon størrelse og grafik samt lokation
let DefaultIcon = L.icon({
  iconUrl: icon.src ?? icon,
  shadowUrl: iconShadow.src ?? iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon

//Lytter efter klik på kortet og sender koordinaterne videre
function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      console.log({ lat, lng });
      setPosition({ lat, lng });

      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
      const data = await res.json();

      const houseNr = data.address.house_number ?? "";
      const streetName = data.address.road ?? "";
      const eventCity = data.address.suburb ?? "";
      const eventPostcode = data.address.postcode ?? "";

      console.log(houseNr, streetName, eventCity, eventPostcode)
      const eventLocation = " " + houseNr + " " + streetName + " " + eventCity + " " + eventPostcode;
     




      onLocationSelect({ lat, lng, name: eventLocation });
    },
  });

  return position ? <Marker position={[position.lat, position.lng]} /> : null;

}

export default function EventMap({ onLocationSelect }) {
  return (
    /*start koordinat for map komponent vises som en lille markering*/
    <MapContainer center={[55.6338, 12.4751]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <LocationMarker onLocationSelect={onLocationSelect} />
    </MapContainer>
  );
}