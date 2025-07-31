// MapView.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markermall from './img/marker-mall.png';
import markerhotel from './img/marker-hotel.png';

const mallmarker = new L.Icon({
  iconUrl: markermall,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const hotelmarker = new L.Icon({
  iconUrl: markerhotel,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapView() {
  return (
    <MapContainer center={[40.39005476530849, 49.83582045720082]} zoom={12} style={{ height: "200px", width: "100%" }}>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[40.38133511538227, 49.846244250915525]} icon={mallmarker}>
        <Popup>28 Mall</Popup>
      </Marker>
      <Marker position={[40.40128933041626, 49.852923817855235]} icon={mallmarker}>
        <Popup>Genclik Mall</Popup>
      </Marker>
      <Marker position={[40.376095815248334, 49.8602067925493]} icon={mallmarker}>
        <Popup>Port Baku Mall</Popup>
      </Marker>
      <Marker position={[40.39051967811413, 49.80673761948161]} icon={mallmarker}>
        <Popup>Baku Mall</Popup>
      </Marker>


      <Marker position={[40.3722287541304, 49.84961724611969]} icon={hotelmarker}>
        <Popup>Hilton</Popup>
      </Marker>
      <Marker position={[40.363595245875, 49.83519087697782]} icon={hotelmarker}>
        <Popup>Four Season</Popup>
      </Marker>
      <Marker position={[40.37675376925124, 49.85866721404523]} icon={hotelmarker}>
        <Popup>Holiday Inn Baku</Popup>
      </Marker>
      <Marker position={[40.39638465246747, 49.84218283552876]} icon={hotelmarker}>
        <Popup>Kristal inn</Popup>
      </Marker>
    </MapContainer>
  );
}
