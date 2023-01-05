import {Col, Row} from "react-bootstrap";

function ProjectDetailEffects(props) {
    // gets the project content and returns the symbols if carg, passenger long oder passenger local is affected
    // TODO: Other symbol for sgv
    return(
        <div>
            <Row xs='auto' >
                {props.activeProjectVariant.effects_passenger_long_rail &&
                    <Col>
                        <nobr>
                            <span title='Fernverkehr'>🚄</span>
                        </nobr>
                    </Col>
                }
                {props.activeProjectVariant.effects_passenger_local_rail &&
                    <Col>
                        <nobr>
                            <span title='Nahverkehr'>🚈</span>
                        </nobr>
                    </Col>
                }
                {props.activeProjectVariant.effects_cargo_rail &&
                    <Col>
                        <nobr>
                            <span title='Güterverkehr'>SGV</span>
                        </nobr>
                    </Col>
                }
            </Row>
        </div>
    )
}

export default ProjectDetailEffects