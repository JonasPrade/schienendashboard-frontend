import {GeoJSON} from "react-leaflet/GeoJSON";
import colors from '../../custom.scss'

function TimetableTrainGroupMapLine(props) {
    var style= { color: colors.map_color_1, weight:4};

    return(
        <GeoJSON
            key={props.TimetableTrainGroup.id}
            data={props.TimetableTrainGroup.coords}
            style={style}
        />
    )
}

export default TimetableTrainGroupMapLine