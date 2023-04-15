import {MapContainer} from "react-leaflet/MapContainer";
import {Marker} from "react-leaflet";
import {TileLayer} from "react-leaflet/TileLayer";
import {GeoJSON} from "react-leaflet/GeoJSON";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {divIcon} from "leaflet/dist/leaflet-src.esm";
import {renderToStaticMarkup} from "react-dom/server";
import LineTractionCost from "./LineTractionCost";
import LineTractionCostDiagramm from "./LineTractionCostDiagramm";
import TimetableTrainGroupMap from "./TimetableTrainGroupMap";

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
                </Col>
                <Col xl="4">
                    <div>
                        <h4>Fahrplan</h4>
                        <div>
                            <ul>
                                {stations.map(station =>
                                    station.ocp_type === 'stop' &&
                                    <li key={station.name}>
                                        {station.name} {station.db_kuerzel}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>

                </Col>
            </Row>

            <div>
                <h3 className="mt-3">Kosten Traktionsarten</h3>
                <div>
                    <Row className="mt-2">
                        <LineTractionCostDiagramm train_costs={props.activeLine.train_costs}/>
                        <p>Hinweis: Infrastrukturkosten sind hier nicht enthalten!</p>
                    </Row>
                    <Row className="mt-2">
                        {props.activeLine.train_costs.map(train_cost =>
                            <Col xl="4">
                                <LineTractionCost key={train_cost.id} train_cost={train_cost}/>
                            </Col>
                        )}
                    </Row>

                </div>
            </div>

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
        </div>
    )

}

export default LineDetail