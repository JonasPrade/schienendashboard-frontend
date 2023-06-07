import {GeoJSON} from "react-leaflet/GeoJSON";


function ProjectListLine(props) {
    var style= { color: '#17C3B2', weight:4};


    return(
        <GeoJSON
            key={props.projectcontent.id}
            data={props.projectcontent.coords}
            style={style}
        />
    )
}

export default ProjectListLine