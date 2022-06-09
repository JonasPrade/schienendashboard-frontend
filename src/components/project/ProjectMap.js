import { MapContainer } from 'react-leaflet/MapContainer';
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from 'react-leaflet/TileLayer';

import 'leaflet/dist/leaflet.css';

function ProjectMap(props) {

    return(
        <MapContainer center={[48.7758459, 9.1829321]} zoom={10} scrollWheelZoom={false} style={{"height": "100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {props.geodata.map((geo) => (
                <GeoJSON key={geo.id} data={geo.coordinates} />
            ))}
        </MapContainer>
    )
}

export default ProjectMap;