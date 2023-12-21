import {GeoJSON} from "react-leaflet/GeoJSON";
import colors from '../../custom.scss'

function TimetableTrainGroupMapLine(props) {
    var style= { color: colors.diagram_color_4, weight:4};

    return(
        <GeoJSON
            key={props.TimetableTrainGroup.id}
            data={props.TimetableTrainGroup.coords}
            style={style}
        />
    )
}

export default TimetableTrainGroupMapLine