import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../project/ProjectGeoJson";

function ProjectGroupMap(props) {

    const allProjectContentsWithColor = props.projectGroups.flatMap(group =>
        group.projects_content.map(projectcontent => ({
            ...projectcontent,
            color: group.color,
            plot: group.plot_only_superior_projects === false ? true : false
        }))
    );

    const allProjectContents = []

    for (let Group of props.projectGroups) {
        for (let Project of Group.projects_content) {
            Project["color"] = Group.color;
            if (Group.plot_only_superior_projects === false) {
                Project["plot"] = true;
            } else {
                if (Project.superior_project_content_id === null) {
                    Project["plot"] = true;
                }
            }
            allProjectContents.push(Project);
        }
    }


    // it will plot all Projects that have NO superior project
    return(
        <div style={{'height': '800px', 'width': '100%'}}>
            <MapContainer center={[51.3127114, 9.4797461]} zoom={6} scrollWheelZoom={true} style={{"height": "100%"}}>
                <TileLayer
                    attribution='Kartenhintergrund: <a href="https://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                    url={process.env.REACT_APP_TILE_LAYER_URL}
                />
                {allProjectContents.map(projectcontent => (
                    projectcontent.plot &&
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
