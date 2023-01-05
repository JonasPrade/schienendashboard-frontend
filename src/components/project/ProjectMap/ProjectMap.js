import { MapContainer } from 'react-leaflet/MapContainer';
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from 'react-leaflet/TileLayer';

import 'leaflet/dist/leaflet.css';

function ProjectMap(props) {

    return(
        <MapContainer center={[props.centroid.coordinates[1],props.centroid.coordinates[0]]} zoom={8} scrollWheelZoom={false} style={{"height": "100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={process.env.REACT_APP_TILE_LAYER_URL}
            />
            {props.geodata.map((geo) => (
                <GeoJSON key={geo.id} data={geo.coordinates} />
            ))}
        </MapContainer>
    )
}

export default ProjectMap;