import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../project/ProjectGeoJson";

function ProjectGroupMap(props) {

    const allProjectContentsWithColor = props.projectGroups.flatMap(group =>
        group.projects_content.map(projectcontent => ({
            ...projectcontent,
            color: group.color
        }))
    );

    return(
        <div style={{'height': '800px', 'width': '100%'}}>
            <MapContainer center={[51.3127114, 9.4797461]} zoom={6} scrollWheelZoom={true} style={{"height": "100%"}}>
                <TileLayer
                    attribution='Kartenhintergrund: <a href="http://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                    url={process.env.REACT_APP_TILE_LAYER_URL}
                />
                {allProjectContentsWithColor.map(projectcontent => (
                    <ProjectGeoJson
                        key={projectcontent.id}
                        projectcontent={projectcontent}
                        color={projectcontent.color}  // Hier geben wir die Farbe weiter
                        setSelectedProject={props.setSelectedProject}
                        selectedProject={props.selectedProject}
                    />
                ))}
            </MapContainer>
        </div>
    )
}

export default ProjectGroupMap;
