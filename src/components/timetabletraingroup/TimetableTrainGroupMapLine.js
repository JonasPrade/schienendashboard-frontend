import {GeoJSON} from "react-leaflet/GeoJSON";


function TimetableTrainGroupMapLine(props) {
    var style= { color: '#17C3B2', weight:4};

    return(
        <GeoJSON
            key={props.TimetableTrainGroup.id}
            data={props.TimetableTrainGroup.coords}
            style={style}
        />
    )
}

export default TimetableTrainGroupMapLine