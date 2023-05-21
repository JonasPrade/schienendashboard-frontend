import {GeoJSON} from "react-leaflet/GeoJSON";
import {useNavigate} from "react-router-dom";


function ProjectGeoJson(props) {
    const projectname = props.projectcontent.name;

    function openProject(){
        props.changeActiveProject(props.projectcontent);
    }

    function oneachfeature(feature, layer){
        layer.on({
            click: openProject
        })
    }

    return(
        <GeoJSON
            key={props.projectcontent.id}
            data={props.projectcontent.coords}
            onEachFeature={oneachfeature}
        />
    )
}

export default ProjectGeoJson