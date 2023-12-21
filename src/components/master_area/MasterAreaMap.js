import {GeoJSON} from "react-leaflet/GeoJSON";
import colors from '../../custom.scss'

function MasterAreaMap(props) {
    var style= { color: colors.map_color_1, weight:4};

    return(
        <GeoJSON
            key={props.masterArea.id}
            data={props.masterArea.coords}
            style={style}
        />
    )
}

export default MasterAreaMap