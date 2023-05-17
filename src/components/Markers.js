import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import {IconLocation} from './IconLocation';


const position = ['-12.063497','-75.207646']

export default function Markers() {
  return (
    <Marker position={position} icon={IconLocation} >
      <Popup>
        Esto es un Popup
      </Popup>
    </Marker>
  )
}
