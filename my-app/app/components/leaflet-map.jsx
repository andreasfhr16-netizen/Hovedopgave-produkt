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
    click: (e) => {
      const { lat, lng } = e.latlng;
      console.log({ lat, lng });
      setPosition({ lat, lng });
      onLocationSelect({ lat, lng });
    },
  });
  
  return position ? <Marker position={[position.lat, position.lng]} /> : null;

}

export default function EventMap({ onLocationSelect }) {
  return (
    /*start koordinat for map komponent vises som en lille markering*/
    <MapContainer center={[55.6761, 12.5683]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <LocationMarker onLocationSelect={onLocationSelect} />
    </MapContainer>
  );
}