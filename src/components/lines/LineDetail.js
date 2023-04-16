import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {divIcon} from "leaflet/dist/leaflet-src.esm";
import {renderToStaticMarkup} from "react-dom/server";
import TimetableTrainGroupMap from "./TimetableTrainGroupMap";
import TimetableTrainGroupTimetable from "./TimetableTrainGroupTimetable";
import TimetableTrainGroupCost from "./TimetableTrainGroupCost";

function LineDetail(props) {
    //TODO: Add stops to map
    //TODO: List all informations about traingroup

    const stations = []
    for (const ocp of props.activeLine.trains[0].train_part.timetable_ocps) {
        if (ocp.ocp.station !== null) {
            stations.push(
                {
                    name: ocp.ocp.station.name,
                    db_kuerzel: ocp.ocp.station.db_kuerzel,
                    ocp_type: ocp.ocp_type,
                    coordinates: ocp.ocp.station.railway_points[0].coordinates.coordinates
                }
            );
        }
    }

    const iconMarkup = renderToStaticMarkup(<div>Test</div>);
    const customMarkerIcon = divIcon({
        html: iconMarkup
    });


    return(
        <div>
            <h2 className="mt-3">
                Traingroup {props.activeLine.code}
            </h2>
            <Row>
                <Col xl="8">
                    <TimetableTrainGroupMap stations={stations} activeLine={props.activeLine}/>
                    <div>
                        <h3 className="mt-3">Informationen zu Traingroup</h3>
                        <div>
                            <h4>Formation</h4>
                            <div>
                                <ul>
                                    <li>Formation {props.activeLine.trains[0].train_part.formation.id}</li>
                                    <li>Geschwindigkeit {props.activeLine.trains[0].train_part.formation.speed}</li>
                                    <li>Länge {props.activeLine.trains[0].train_part.formation.length}</li>
                                </ul>
                            </div>
                            <h5>Wagenmaterial</h5>
                            <div>
                                {props.activeLine.trains[0].train_part.formation.vehicles.map(vehicle =>
                                    <div key={vehicle.id}>

                                        <h6>{vehicle.name} {vehicle.id}</h6>
                                        <ul key={vehicle.id}>
                                            <li>Gewicht {vehicle.weight}</li>
                                            <li>Länge {vehicle.length}</li>
                                            <li>Geschwindigkeit {vehicle.speed}</li>
                                            <li>Antrieb? {vehicle.engine}</li>
                                            <li>Waggon? {vehicle.wagon}</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl="4">
                    <TimetableTrainGroupTimetable stations={stations} activeLine={props.activeLine}/>
                </Col>
            </Row>
            <TimetableTrainGroupCost activeLine={props.activeLine}/>
        </div>
    )

}

export default LineDetail