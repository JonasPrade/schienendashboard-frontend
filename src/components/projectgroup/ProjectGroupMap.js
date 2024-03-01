import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../project/ProjectGeoJson";
import colors from '../../custom.scss'
import {useEffect, useMemo, useState} from "react";
import L from "leaflet";

function ProjectGroupMap(props) {
    const CircleRadius = 6
    const CircleRadiusHover = 8.5
    const LineWeight = 2.8
    const LineWeightHover = 5
    const [colorToProject, setColorToProject] = useState({});

    useEffect(() => {
        const result = {};
        props.projects.forEach(project => {
            const projectGroups = project.projectcontent_groups;
            project.plot = project.superior_project_content_id === null;

            for (const group of projectGroups) {
                if (props.selectedGroupIds.includes(group.id)) {
                    result[project.id] = props.groupColors[group.name];
                }
                if (!project.plot && !group.plot_only_superior_projects) {
                    project.plot = true;
                }
            }

            if (props.selectedProject) {
                const selectedProjectId = props.selectedProject.id;
                result[selectedProjectId] = colors.map_color_2;
            }

        });

        setColorToProject(result);
    }, [props.projects, props.selectedProject, props.groupColors]);

    function highlightAllRelatedFeatures(layer, geoJsonLayer) {
        const targetProjectContentId = layer.feature.properties.projectcontent_id;
        geoJsonLayer.current.eachLayer((l) => {
            if (l.feature.properties.projectcontent_id === targetProjectContentId) {
                if (l instanceof L.Polyline) {
                    l.setStyle({
                        weight: LineWeightHover // Set line thickness to 6 on hover
                    });
                } else if (l instanceof L.CircleMarker) {
                    l.setStyle({
                        radius: CircleRadiusHover // Set circle radius to 10 on hover
                    });
                }
            }
        });
    }

    function resetAllRelatedFeatures(layer, geoJsonLayer, colorToProject) {
        const targetProjectContentId = layer.feature.properties.projectcontent_id;
        geoJsonLayer.current.eachLayer((l) => {
            if (l.feature.properties.projectcontent_id === targetProjectContentId) {
                if (l instanceof L.Polyline) {
                    l.setStyle({
                        weight: LineWeight // Set line thickness back to 2 on mouseout
                    });
                } else if (l instanceof L.CircleMarker) {
                    l.setStyle({
                        radius: CircleRadius // Set circle radius back to 6.5 on mouseout
                    });
                }
            }
        });
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
                            colorToProject={colorToProject}
                            setSelectedProject={props.setSelectedProject}
                            highlightAllRelatedFeatures={highlightAllRelatedFeatures}
                            resetAllRelatedFeatures={resetAllRelatedFeatures}
                            CircleRadius={CircleRadius}
                            LineWeight={LineWeight}
                        />
                ))}
            </MapContainer>
        </div>
    )
}

export default ProjectGroupMap;
