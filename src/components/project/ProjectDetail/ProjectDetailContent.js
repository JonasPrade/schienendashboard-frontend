import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGaugeHigh, faStairs} from "@fortawesome/free-solid-svg-icons";

function ProjectDetailContent(props) {

    return (
        <div>
            <Row xs='auto'>
                {props.activeProjectVariant.length &&
                    <Col>
                        <nobr>
                            <span title='Länge'>&#10231; {props.activeProjectVariant.length}km</span>
                        </nobr>
                    </Col>
                }
                {props.activeProjectVariant.nbs &&
                    <Col>
                        <span title='Neubaustrecke' className='border border-white bg-info rounded-1 p-1'>NBS</span>
                    </Col>
                }
                {props.activeProjectVariant.elektrification &&
                    <Col>
                        <span title='Elektrifizierung'>&#9190;</span>
                    </Col>
                }
                {props.activeProjectVariant.second_track &&
                    <Col>
                        <span title='Zweites Gleis'>&#8594;2</span>
                    </Col>
                }
                {props.activeProjectVariant.third_track &&
                    <Col>
                        <span title='Drittes Gleis'>&#8594;3</span>
                    </Col>
                }
                {props.activeProjectVariant.fourth_track &&
                    <Col>
                        <span title='Viertes Gleis'>&#8594;4</span>
                    </Col>
                }
                {props.activeProjectVariant.curve &&
                    <Col>
                        <span title='Neue Verbindungskurve'>&#10699;</span>
                    </Col>
                }
                {props.activeProjectVariant.platform &&
                    <Col>
                        <span title='Neuer Bahnsteig'>+ &#9644;</span>
                    </Col>
                }
                {props.activeProjectVariant.junction_station &&
                    <Col>
                        <span title='Neue Begegnungsbahnhöfe'>[] {props.activeProjectVariant.number_junction_station}</span>
                    </Col>
                }
                {props.activeProjectVariant.overtaking_station &&
                    <Col>
                        <span title='Neue Überholbahnhöfe'>() {props.activeProjectVariant.number_overtaking_station}</span>
                    </Col>
                }
                {props.activeProjectVariant.double_occupancy &&
                    <Col>
                        <span title='Einfahrt in besetztes Gleis'>&#9644;|&#9644;</span>
                    </Col>
                }
                {props.activeProjectVariant.block_increase &&
                    <Col>
                        <span title='Blockverdichtung'>+ Bksig</span>
                    </Col>
                }
                {props.activeProjectVariant.flying_junction &&
                    <Col>
                        <span title='Höhenfrei (Überwerfungsbauwerk)'>]|[</span>
                    </Col>
                }
                {props.activeProjectVariant.tunnel_structural_gauge &&
                    <Col>
                        <span title='Lichtraumprofilerweiterung (Tunnel)'>KV400</span>
                    </Col>
                }
                {props.activeProjectVariant.new_vmax &&
                    <Col>
                        <span title='Erhöhung Geschwindigkeit'>
                            <span title='Erhöhung Geschwindigkeit'>{props.activeProjectVariant.new_vmax} </span>
                            <FontAwesomeIcon icon={faGaugeHigh} title='Erhöhung Geschwindigkeit'/>
                        </span>

                    </Col>
                }
                {props.activeProjectVariant.level_free_platform_entrance &&
                    <Col>
                        <span title='Beseitigung höhengleicher Bahnsteigzugang'>
                            <FontAwesomeIcon icon={faStairs}/>
                        </span>
                    </Col>
                }
            </Row>
        </div>
    )
}

export default ProjectDetailContent