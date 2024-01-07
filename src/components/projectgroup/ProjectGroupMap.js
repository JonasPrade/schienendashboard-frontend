import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../project/ProjectGeoJson";

function ProjectGroupMap(props) {
    // add the color to each project of props.project. the color is defined for each projectgroup
    for (const project of props.projects) {
        const project_groups = project.projectcontent_groups
        project.plot = project.superior_project_content_id === null;

        // add the color if the project_group is in selectedGroupIds
        for (const group of project_groups) {
            if (props.selectedGroupIds.includes(group.id)) {
                project.color = group.color
            }
            if (project.plot === false && group.plot_only_superior_projects === false) {
                project.plot = true
            }
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
                {props.projects.map(projectcontent => (
                    projectcontent.plot &&
                        <ProjectGeoJson
                            key={projectcontent.id}
                            projectcontent={projectcontent}
                            color={projectcontent.color}
                            setSelectedProject={props.setSelectedProject}
                        />
                ))}
            </MapContainer>
        </div>
    )
}

export default ProjectGroupMap;
