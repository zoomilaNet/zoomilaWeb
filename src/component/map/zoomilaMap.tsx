import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from "leaflet";
export default function ZoomilaMap({latlng}:{latlng:[number,number]}){
    return <div>
        <MapContainer id="zoomilamap" center={latlng} zoom={16} className="w-full h-92">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <Marker position={latlng} icon={new Icon({iconUrl: "/image/marker.png", iconSize: [34, 50], iconAnchor: [17, 50]})} >
                 <Popup>
                     جزئیات آگهی
                 </Popup>
            </Marker>
        </MapContainer>
    </div>
}
