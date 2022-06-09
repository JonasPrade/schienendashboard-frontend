import {GeoJSON} from "react-leaflet/GeoJSON";
import {useNavigate} from "react-router-dom";


function ProjectGeoJson(props) {
    const navigate = useNavigate();
    const projectid = props.project.id;
    const projectname = props.project.name;

    function openProject(){
        props.changeActiveProject(projectid);
    }

    function oneachfeature(feature, layer){
        layer.on({
            click: openProject
        })
    }

    // get the prioProjetContent and plot it
    const firstProjectContentGeo = getFirstProjectContentGeo(props.project.first_project_content)
    function getFirstProjectContentGeo(projectcontentid) {
        if (props.project.project_contents.length>0) {
            let firstProjectContentArrayId =  props.project.project_contents.findIndex(object => {
                return object.id===projectcontentid
            })
            let firstProjectContent = props.project.project_contents[firstProjectContentArrayId]
            if (firstProjectContent.projectcontent_railway_lines) {
                return firstProjectContent.projectcontent_railway_lines
            } else {
                return false
            }
        }
        else {
            return false
        }
    }

    if (firstProjectContentGeo) {
        return(
            firstProjectContentGeo.map((geo) => (
                <GeoJSON
                    key={geo.id}
                    data={geo.coordinates}
                    onEachFeature={oneachfeature}
                />
            ))
        )
    } else {
        <span></span>
    }
}

export default ProjectGeoJson