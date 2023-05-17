import React from 'react';

import { MapContainer, TileLayer, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';

export default function MapView() {
 
  return(
    <MapContainer center={{lat:'-12.063497', lng:'-75.207646'}} zoom={15} >
      <TileLayer 
      url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
      attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' />
      <Markers />
    </MapContainer>)
};
