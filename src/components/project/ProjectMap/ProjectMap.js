import { MapContainer } from 'react-leaflet/MapContainer';
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from 'react-leaflet/TileLayer';

import 'leaflet/dist/leaflet.css';
import ProjectListLine from "./ProjectListLine";

function ProjectMap(props) {
    var style= { color: '#17C3B2', weight:4};
    var centroid = [51.3127114, 9.4797461]

    if (props.project.hasOwnProperty('centroid')) {
        if (props.project.centroid != null) {
            centroid = [props.project.centroid.coordinates[1],props.project.centroid.coordinates[0]]
        }
    }

    return(
        <MapContainer center={centroid} zoom={10} scrollWheelZoom={true} style={{"height": "100%"}}>
            <TileLayer
                attribution='Kartenhintergrund: <a href="http://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                url={process.env.REACT_APP_TILE_LAYER_URL}
            />
            {props.project.geojson_representation.features.length > 0 && <ProjectListLine projectcontent={props.project}/>}
            <GeoJSON data={props.project.geojson_representation} style={style} />
        </MapContainer>
    )
}

export default ProjectMap;