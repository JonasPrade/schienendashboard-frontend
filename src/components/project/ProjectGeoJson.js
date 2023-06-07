import {GeoJSON} from "react-leaflet/GeoJSON";


function ProjectGeoJson(props) {
    var style= { color: '#17C3B2', weight:4};

    function openProject(){
        props.changeActiveProject(props.projectcontent);
    }

    function highlightFeature(e) {
        e.target.setStyle({
            color: '#E09A1A'  // diagram_color_2
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