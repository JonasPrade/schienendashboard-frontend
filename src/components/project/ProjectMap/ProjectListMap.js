import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";

import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../ProjectGeoJson";

function ProjectListMap(props) {

    return(
        <div style={{'height': '800px', 'width': '100%'}}>
            <MapContainer center={[51.3127114, 9.4797461]} zoom={7} scrollWheelZoom={true} style={{"height": "100%"}}>
                <TileLayer
                    attribution='Kartenhintergrund: <a href="http://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                    url={process.env.REACT_APP_TILE_LAYER_URL}
                />
                {props.projectscontent.map(projectcontent => (
                    <ProjectGeoJson
                        key={projectcontent.id}
                        projectcontent={projectcontent}
                        selectedProject={props.activeProject}
                        setSelectedProject={props.changeActiveProject}
                        color={'#17C3B2'}
                    />
                ))}
                {/*{props.projectscontent.map(projectcontent => (*/}
                {/*    <ProjectMapStation*/}
                {/*        key={projectcontent.id}*/}
                {/*        projectcontent={projectcontent}*/}
                {/*        activeProject={props.activeProject}*/}
                {/*        changeActiveProject={props.changeActiveProject}*/}
                {/*        showpopup={true}*/}
                {/*    />*/}
                {/*))}*/}
            </MapContainer>
        </div>

    )
}

export default ProjectListMap;