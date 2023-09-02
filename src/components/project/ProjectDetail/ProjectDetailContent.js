import {Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStairs} from "@fortawesome/free-solid-svg-icons";
import TooltipWrapper from "../../layout/TooltipWrapper";

function ProjectDetailContent(props) {

    return (
        <div>
            <Row xs='auto'>
                {props.activeProjectVariant.length &&
                    <Col>
                        <nobr>
                            <span title='Länge'>&#10231; {Math.round(props.activeProjectVariant.length).toLocaleString('de')}km</span>
                        </nobr>
                    </Col>
                }
                {props.activeProjectVariant.nbs &&
                    <Col>
                        <span title='Neubaustrecke' className='border border-white bg-info rounded-1 p-1'>NBS</span>
                    </Col>
                }
                {props.activeProjectVariant.abs &&
                    <Col>
                        <span title="Ausbaustecke" className='border border-white bg-info rounded-1 p-1'>ABS</span>
                    </Col>
                }
                {props.activeProjectVariant.elektrification &&
                    <Col>
                        <TooltipWrapper tooltipContent="Elektrifizierung">
                            <span>&#9190;</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.battery &&
                    <Col>
                        <TooltipWrapper tooltipContent="batterieelektrisch">
                            <span>🔋</span>
                        </TooltipWrapper>
                    </Col>

                }
                {props.activeProjectVariant.filling_stations_efuel &&
                    <Col>
                        <span title="E-Fuel">E-Fuel Tankstellen {props.activeProjectVariant.filling_stations_count}</span>
                    </Col>

                }
                {props.activeProjectVariant.filling_stations_h2 &&
                    <Col>
                        <span title="Wasserstoff">H2 Tankstellen {props.activeProjectVariant.filling_stations_count}</span>
                    </Col>

                }
                {props.activeProjectVariant.filling_stations_diesel &&
                    <Col>
                        <span title="Diesel">Diesel Tankstellen {props.activeProjectVariant.filling_stations_count}</span>
                    </Col>

                }
                {props.activeProjectVariant.second_track &&
                    <Col>
                        <TooltipWrapper tooltipContent="Zweites Gleis">
                            <span>&#8594;2</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.third_track &&
                    <Col>
                        <TooltipWrapper tooltipContent="Drittes Gleis">
                            <span>&#8594;3</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.fourth_track &&
                    <Col>
                        <TooltipWrapper tooltipContent="Viertes Gleis">
                            <span>&#8594;4</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.curve &&
                    <Col>
                        <TooltipWrapper tooltipContent="Verbindungskurve">
                            <span>&#10699;</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.platform &&
                    <Col>
                        <TooltipWrapper tooltipContent="Neuer Bahnsteig">
                            <span>+ &#9644;</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.junction_station &&
                    <Col>
                        <TooltipWrapper tooltipContent="Neue Begnungsbahnhöfe">
                            <span>[] {props.activeProjectVariant.number_junction_station}</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.overtaking_station &&
                    <Col>
                        <TooltipWrapper tooltipContent="Überholbahnhöfe">
                            <span>() {props.activeProjectVariant.number_overtaking_station}</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.double_occupancy &&
                    <Col>
                        <TooltipWrapper tooltipContent="Einfahrt in besetzes Gleis">
                            <span>&#9644;|&#9644;</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.block_increase &&
                    <Col>
                        <TooltipWrapper tooltipContent="Blockverdichtung">
                            <span>+ Bksig</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.flying_junction &&
                    <Col>
                        <TooltipWrapper tooltipContent="Überholbahnhöfe">
                            <span>]|[</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.tunnel_structural_gauge &&
                    <Col>
                        <TooltipWrapper tooltipContent="Lichtraumprofilerweiterung (Tunnel)">
                            <span>KV400</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.new_vmax &&
                    <Col>
                        <TooltipWrapper tooltipContent="Erhöhung Geschwindigkeit">
                            <span title='Erhöhung Geschwindigkeit'>vmax {props.activeProjectVariant.new_vmax} km/h</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.level_free_platform_entrance &&
                    <Col>
                        <TooltipWrapper tooltipContent="Beseitigung höhengleicher Bahnsteig">
                            <FontAwesomeIcon icon={faStairs}/>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.etcs &&
                    <Col>
                        <TooltipWrapper tooltipContent="ETCS (ggf. Level angegeben)">
                            <span>ETCS L{props.activeProjectVariant.etcs_level}</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.delta_co2 &&
                    <Col>
                        <span title='CO2'>
                            {props.activeProjectVariant.delta_co2.toLocaleString('de')} t CO2
                        </span>
                    </Col>
                }
                {props.activeProjectVariant.sgv740m &&
                    <Col>
                        <TooltipWrapper tooltipContent="740m">
                            <span>740m</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.railroad_crossing &&
                    <Col>
                        <TooltipWrapper tooltipContent="Änderungen an Bahnübergängen">
                            <span>BÜ</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.new_estw &&
                    <Col>
                        <TooltipWrapper tooltipContent="neues ESTW">
                            <span>ESTW</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.new_dstw &&
                    <Col>
                        <TooltipWrapper tooltipContent="neues DSTW">
                            <span>DSTW</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.noise_barrier &&
                    <Col>
                        <TooltipWrapper tooltipContent="Lärmschutzmaßnahmen (z.B. Schallschutzwand)">
                            <span>🔇</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.sanierung &&
                    <Col>
                        <TooltipWrapper tooltipContent="Sanierung der Strecke">
                            <span>Sanierung</span>
                        </TooltipWrapper>
                    </Col>
                }
                {props.activeProjectVariant.closure &&
                    <Col>
                        <TooltipWrapper tooltipContent="Stilllegung">
                            <span>❌</span>
                        </TooltipWrapper>
                    </Col>
                }
            </Row>
        </div>
    )
}

export default ProjectDetailContent