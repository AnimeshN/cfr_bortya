import React from "react";
import 'leaflet/dist/leaflet.css';


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  const position = [51.505, -0.09]; // Replace with your initial map position (latitude, longitude)

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}  style={{ height: '100%', width: '100%' }}> 
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  );
};

export default MapComponent;
