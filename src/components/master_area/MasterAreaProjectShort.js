import ProjectDetailContent from "../project/ProjectDetail/ProjectDetailContent";
import ProjectDetailEffects from "../project/ProjectDetail/ProjectDetailEffects";
import {Row, Col, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function MasterAreaProjectShort(props) {


    if (props.project.battery) {
        var battery_stations = []
        var battery_lines = []
        for (const sub_project of props.project.sub_project_contents) {
            if (sub_project.charging_station) {
                battery_stations.push(...sub_project.railway_stations)
            }
            if (sub_project.elektrification) {
                battery_lines.push(...sub_project.railway_lines)
            }
        }
    }

    return(
        <div className="square border bg-light rounded p-3 m-2">
            <Row>
                <Col xl="8">
                    <h5>{props.project.name}</h5>
                </Col>
                <Col xl="1">
                    <ProjectDetailEffects activeProjectVariant={props.project}/>
                </Col>

            </Row>
            <Row>
                <Col>
                    <ProjectDetailContent activeProjectVariant={props.project}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Gesamtkosten</td>
                                <td>{Math.round(props.project.planned_total_cost).toLocaleString('de')} Tsd. € Barwert</td>
                            </tr>

                        </tbody>
                    </Table>
                </Col>
            </Row>
            {props.project.battery &&
                <Row>
                    <h6>Details Infrastruktur Batterie</h6>
                    {props.project.sub_project_contents.map(sub_project =>
                        <div>
                            <p>{sub_project.name}</p>
                        </div>
                    )}
                </Row>
            }



        </div>
    )
}

export default MasterAreaProjectShort