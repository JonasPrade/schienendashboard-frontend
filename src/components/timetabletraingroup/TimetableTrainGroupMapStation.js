
import {Marker, Popup} from "react-leaflet";


import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function TimetableTrainGroupMapStation(props) {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [32, 40],
        iconAnchor: [16,32]
    })

    return(
        <Marker
            icon={DefaultIcon}
            position={[props.station.coordinates[0][1], props.station.coordinates[0][0]]}>
            <Popup closeButton={false}>
                {props.station.name}
            </Popup>
        </Marker>

    )
}

export default TimetableTrainGroupMapStation