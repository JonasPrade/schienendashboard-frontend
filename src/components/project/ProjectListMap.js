import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";

import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "./ProjectGeoJson";
import {Popup} from "react-leaflet/Popup";

function ProjectListMap(props) {

    return(
        <MapContainer center={[48.7758459, 9.1829321]} zoom={10} scrollWheelZoom={false} style={{"height": "100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {props.projectslist.projects.map(project => (
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