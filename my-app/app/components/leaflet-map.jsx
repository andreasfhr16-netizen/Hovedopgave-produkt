"use client"

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

//ikon størrelse  og grafik samt lokation
let DefaultIcon = L.icon({
  iconUrl: icon.src ?? icon,
  shadowUrl: iconShadow.src ?? iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon

export default function EventMap() {
  return (
    /*start koordinat for map komponent*/
    <MapContainer center={[55.6761, 12.5683]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={[55.6761, 12.5683]} />
    </MapContainer>
  );
}