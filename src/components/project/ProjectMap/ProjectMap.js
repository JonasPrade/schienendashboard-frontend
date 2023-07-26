import { MapContainer } from 'react-leaflet/MapContainer';
import { GeoJSON } from "react-leaflet/GeoJSON";
import { TileLayer } from 'react-leaflet/TileLayer';

import 'leaflet/dist/leaflet.css';
import ProjectListLine from "./ProjectListLine";
import ProjectMapStation from "./ProjectMapStation";

function ProjectMap(props) {
    var style= { color: '#17C3B2', weight:4};
    var centroid = [51.3127114, 9.4797461]

    if (props.project.hasOwnProperty('coords_centroid')) {
        if (props.project.coords_centroid != null) {
            centroid = [props.project.coords_centroid.coordinates[1],props.project.coords_centroid.coordinates[0]]
        }
    }

    if (props.project.railway_stations.length > 0) {
        centroid = [props.project.railway_stations[0].railway_points[0].coordinates.coordinates[0][1], props.project.railway_stations[0].railway_points[0].coordinates.coordinates[0][0]]
    }

    return(
        <MapContainer center={centroid} zoom={10} scrollWheelZoom={true} style={{"height": "100%"}}>
            <TileLayer
                attribution='Kartenhintergrund: <a href="http://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                url={process.env.REACT_APP_TILE_LAYER_URL}
            />
            {props.project.coords.coordinates.length > 0 && <ProjectListLine projectcontent={props.project}/>}
            <ProjectMapStation projectcontent={props.project} showpopup={false}/>
            <GeoJSON data={props.geodata} style={style} />
        </MapContainer>
    )
}

export default ProjectMap;