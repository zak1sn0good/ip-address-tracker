import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";

type mapControllerProps = {
  center : LatLngExpression
};

export default function MapController({ center } : mapControllerProps){
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center]);
  return (
    <Marker position={center} />
  );
};