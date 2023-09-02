import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {divIcon} from "leaflet/dist/leaflet-src.esm";
import {renderToStaticMarkup} from "react-dom/server";
import TimetableTrainGroupMap from "./TimetableTrainGroupMap";
import TimetableTrainGroupTimetable from "./TimetableTrainGroupTimetable";
import TimetableTrainGroupCost from "./TimetableTrainGroupCost";
import TimetableTrainGroupFormationAndVehicles from "./TimetableTrainGroupFormationAndVehicles";

function TimetableTrainGroupDetail(props) {
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


    return(
        <div>
            <h2 className="mt-3">
                Traingroup {props.activeLine.trains[0].description}
            </h2>
            <p>Code: {props.activeLine.code}</p>
            <p>Id: {props.activeLine.id}</p>
            <Row>
                <Col xl="8">
                    <Row>
                        <TimetableTrainGroupMap stations={stations} activeLine={props.activeLine}/>
                    </Row>
                    <Row className="mt-3">
                        <TimetableTrainGroupFormationAndVehicles activeLine={props.activeLine}/>
                    </Row>
                </Col>
                <Col xl="4">
                    <TimetableTrainGroupTimetable stations={stations} activeLine={props.activeLine}/>
                </Col>
            </Row>
            <TimetableTrainGroupCost activeLine={props.activeLine}/>
        </div>
    )

}

export default TimetableTrainGroupDetail