import {GeoJSON} from "react-leaflet/GeoJSON";
import colors from '../../../custom.scss'

function ProjectListLine(props) {
    var style= { color: colors.map_color_1, weight:4};


    return(
        <GeoJSON
            key={props.projectcontent.id}
            data={props.projectcontent.coords}
            style={style}
        />
    )
}

export default ProjectListLine