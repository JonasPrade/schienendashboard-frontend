import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import 'leaflet/dist/leaflet.css';
import ProjectGeoJson from "../ProjectGeoJson";
import {highlightAllRelatedFeatures, resetAllRelatedFeatures} from "../../../services/projectgroup/leafletfunctions";
import settings from "../../../config/settings";
import colors from '../../../custom.scss';
import {useEffect, useState} from "react";

function ProjectListMap(props) {
    var centroid = [51.3127114, 9.4797461]
    const [colorToProject, setColorToProject] = useState({});

    if (props.projectscontent[0].hasOwnProperty('centroid')) {
        if (props.projectscontent[0].centroid != null) {
            centroid = [props.projectscontent[0].centroid.coordinates[1],props.projectscontent[0].centroid.coordinates[0]]
        }
    }

    useEffect(() => {
        const result = {};
        props.projectscontent.forEach(project => {
            result[project.id] = colors.map_color_1
            if (props.activeProject) {
                result[props.activeProject.id] = colors.map_color_2
            }
        })
        setColorToProject(result)
    }, [props.activeProject])

    return(
        <div style={{'height': '800px', 'width': '100%'}}>
            <MapContainer center={centroid} zoom={7} scrollWheelZoom={true} style={{"height": "100%"}}>
                <TileLayer
                    attribution='Kartenhintergrund: <a href="https://www.bkg.bund.de">Bundesamt für Kartographie und Geodäsie</a>'
                    url={process.env.REACT_APP_TILE_LAYER_URL}
                />
                {props.projectscontent.map(projectcontent => (
                    <ProjectGeoJson
                        key={projectcontent.id}
                        projectcontent={projectcontent}
                        selectedProject={props.activeProject}
                        setSelectedProject={props.changeActiveProject}
                        colorToProject={colorToProject}
                        highlightAllRelatedFeatures={highlightAllRelatedFeatures}
                        resetAllRelatedFeatures={resetAllRelatedFeatures}
                        CircleRadius={settings.CircleRadius}
                        LineWeight={settings.LineWeight}
                    />
                ))}
            </MapContainer>
        </div>

    )
}

export default ProjectListMap;