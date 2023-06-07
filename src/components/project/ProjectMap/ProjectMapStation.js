import {Marker, Popup} from "react-leaflet";
import L from "leaflet";

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Button} from "react-bootstrap";

function ProjectMapStation(props) {

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [32, 40],
        iconAnchor: [16,32]
    })

    function openProjectlong(e) {
        e.preventDefault();
        props.changeActiveProject(props.projectcontent)
    }

    if (props.projectcontent.railway_stations.length > 0) {
        return(
            props.projectcontent.railway_stations.map(station =>
                <Marker
                    key={station.id}
                    icon={DefaultIcon}
                    position={[station.railway_points[0].coordinates.coordinates[0][1], station.railway_points[0].coordinates.coordinates[0][0]]}>
                    {props.showpopup &&
                        <Popup closeButton={false}>
                            <Button variant='outline-info' onClick={openProjectlong}>
                                {props.projectcontent.name}
                            </Button>
                        </Popup>
                    }
                </Marker>
            )
        )
    }
}

export default ProjectMapStation
