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

    // it will plot all Projects that have NO superior project
    return(
        <div style={{'height': '800px', 'width': '100%'}}>
            <MapContainer center={[51.3127114, 9.4797461]} zoom={6} scrollWheelZoom={true} style={{"height": "100%"}}>
                <TileLayer
                    attribution='Kartenhintergrund: <a href="https://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                    url={process.env.REACT_APP_TILE_LAYER_URL}
                />
                {allProjectContentsWithColor.map(projectcontent => (
                    !projectcontent.superior_project_content_id &&
                        <ProjectGeoJson
                            key={projectcontent.id}
                            projectcontent={projectcontent}
                            color={projectcontent.color}  // Hier geben wir die Farbe weiter
                            setSelectedProject={props.setSelectedProject}
                        />
                ))}
            </MapContainer>
        </div>
    )
}

export default ProjectGroupMap;
