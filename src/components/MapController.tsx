import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

type mapControllerProps = {
  center : LatLngExpression
};

export default function MapController({ center } : mapControllerProps){
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center]);
  return (
    <Marker 
      position={center} 
      icon={
        new Icon({
          iconUrl: markerIconPng, 
          iconSize: [32, 45], 
          iconAnchor: [14, 41]
        })
      } 
    />
  );
};