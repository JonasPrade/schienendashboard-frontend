import {GeoJSON} from "react-leaflet/GeoJSON";
import {useNavigate} from "react-router-dom";


function ProjectGeoJson(props) {
    var style= { color: '#D741A7', weight:4};

    function openProject(){
        props.changeActiveProject(props.projectcontent);
    }

    function highlightFeature(e) {
        e.target.setStyle({
            color: '#1E491D'
        })
    };

    function resetHighlight(e) {
        e.target.setStyle(style)
    }


    function oneachfeature(feature, layer){
        layer.on({
            click: openProject,
            mouseover: highlightFeature,
            mouseout: resetHighlight
        })
    }

    return(
        <GeoJSON
            key={props.projectcontent.id}
            data={props.projectcontent.coords}
            onEachFeature={oneachfeature}
            style={style}
        />
    )
}

export default ProjectGeoJson