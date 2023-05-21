import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";

import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../ProjectGeoJson";
import {Popup} from "react-leaflet/Popup";
import {Col, Row} from "react-bootstrap";

function ProjectListMap(props) {

    return(
        <div style={{'height': '800px', 'width': '100%'}}>
            <MapContainer center={[51.3127114, 9.4797461]} zoom={7} scrollWheelZoom={false} style={{"height": "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={process.env.REACT_APP_TILE_LAYER_URL}
                />
                {props.projectscontent.map(projectcontent => (
                    <ProjectGeoJson
                        key={projectcontent.id}
                        projectcontent={projectcontent}
                        activeProject={props.activeProject}
                        changeActiveProject={props.changeActiveProject}
                    />
                ))}
            </MapContainer>
        </div>

    )
}

export default ProjectListMap;