import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { LatLngExpression } from "leaflet";
type mapProps = {
  position : LatLngExpression,
  children : React.ReactNode
}

export default function Map ({ position, children } : mapProps) {
  
  return(
    <MapContainer
      style={{ width : '100%', height : '100%'}}
      center={position}
      zoom={13}
      zoomControl={false}
    >
      { children }
      <ZoomControl position='bottomleft'/>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};