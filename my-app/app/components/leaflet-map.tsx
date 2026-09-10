"use client"

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from "react";
import Epreview from "./event-preview";
import "../stylesheets/map-popup.css";

let DefaultIcon = L.icon({
  iconUrl: icon.src ?? icon,
  shadowUrl: iconShadow.src ?? iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon

type EventLocation = {
  lat: number;
  lng: number;
  name: string;
};

type EventItem = {
  id: string;
  Event_lat: number;
  Event_lng: number;
  Event_heading?: string;
  Event_description?: string;
  Event_entry_price?: string;
  [key: string]: any;
};

type EventMapProps = {
  onLocationSelect: (location: EventLocation | null) => void;
  mode: "view" | "search";
  events?: EventItem[];
};

//view mode lytter efter klik og sender koordinaterne videre
function LocationMarker({
  onLocationSelect,
  mode,
}: Pick<EventMapProps, "onLocationSelect" | "mode">) {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);

  useMapEvents({
    click: async (e) => {
      if (mode !== "view") return;

      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });

      let eventLocation = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
        );
        const data = await res.json();

        const houseNr = data.address?.house_number ?? "";
        const streetName = data.address?.road ?? "";
        const eventCity = data.address?.suburb ?? "";
        const eventPostcode = data.address?.postcode ?? "";

        eventLocation = ` ${houseNr} ${streetName} ${eventCity} ${eventPostcode}`;
      } catch (err) {
        console.error("Kunne ikke hente adresse:", err);
      }

      onLocationSelect({ lat, lng, name: eventLocation });
    },
  });

  if (mode !== "view") return null;
  return position ? <Marker position={[position.lat, position.lng]} /> : null;
}

//search mode modtager events som prop og viser dem som markører
function EventMarkers({
  mode,
  events,
}: {
  mode: EventMapProps["mode"];
  events: EventItem[];
}) {
  if (mode !== "search") return null;

  return (
    <>
      {events.map((eventitem) => {
        if (!eventitem.Event_lat || !eventitem.Event_lng) return null;

        return (
          <Marker key={eventitem.id} position={[eventitem.Event_lat, eventitem.Event_lng]}>
            <Popup>
              <div className="popup-con">
                <Epreview event={eventitem} />
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default function EventMap({ onLocationSelect, mode, events = [] }: EventMapProps) {
  return (
    <MapContainer center={[55.6338, 12.4751]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <LocationMarker onLocationSelect={onLocationSelect} mode={mode} />
      <EventMarkers mode={mode} events={events} />
    </MapContainer>
  );
}