import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";

import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../ProjectGeoJson";
import {Popup} from "react-leaflet/Popup";

function ProjectListMap(props) {

    return(
        <MapContainer center={[51.3127114, 9.4797461]} zoom={7} scrollWheelZoom={false} style={{"height": "100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={process.env.REACT_APP_TILE_LAYER_URL}
            />
            {props.projects.map(project => (
                <ProjectGeoJson
                    key={project.id}
                    project={project}
                    activeProject={props.activeProject}
                    changeActiveProject={props.changeActiveProject}
                />
            ))}
        </MapContainer>
    )
}

export default ProjectListMap;