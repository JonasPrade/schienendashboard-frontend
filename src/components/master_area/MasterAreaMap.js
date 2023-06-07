import {GeoJSON} from "react-leaflet/GeoJSON";


function MasterAreaMap(props) {
    var style= { color: '#17C3B2', weight:4};

    return(
        <GeoJSON
            key={props.masterArea.id}
            data={props.masterArea.coords}
            style={style}
        />
    )
}

export default MasterAreaMap