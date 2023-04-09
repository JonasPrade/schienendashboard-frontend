import {Col, Row} from "react-bootstrap";
import {MapContainer} from "react-leaflet/MapContainer";
import {TileLayer} from "react-leaflet/TileLayer";
import MasterScenarioPlotArea from "./MasterScenarioPlotArea";
import MasterAreaShort from "../master_area/MasterAreaShort";
import {useState} from "react";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import {useEffect} from "react";
import getMainMasterAreaForScenario from "../../services/master_areas/main_master_area_service";
import Loading from "../layout/Loading";
import master_area_calc_parameters from "../../services/master_areas/master_area_calc_parameters";
import MasterScenarioParametersTraingroup from "./MasterScenarioParametersTraingroup";
import MasterScenarioParameterArea from "./MasterScenarioParameterArea";
import MasterScenarioParameterCost from "./MasterScenarioParameterCost";


Chart.register(
    ArcElement,
    Tooltip,
    Legend
);

function MasterScenarioDetails(props) {
    const [masterAreas, setMasterAreas] = useState(null)
    const [areaLoading, setAreaLoading] = useState(true)
    const [activeMasterArea, setMasterArea] = useState(null)
    const [parameters, setParameters] = useState(null)

    var data_area_count = {}

    useEffect(() => {
        setAreaLoading(true);
        getMainMasterAreaForScenario(props.master_scenario.id).then(response => {
            const master_areas = response
            setMasterAreas(master_areas);
            setAreaLoading(false);
        })
    }, [])

    useEffect(() => {
        setParameters(master_area_calc_parameters(masterAreas))
    }, [masterAreas])

    const options_pie = {
        plugins: {
            legend: {
                display: true
            }
        }
    }

    return(
        <div>
            <h2 className="mt-5">Szenario {props.master_scenario.id}</h2>
            <div>
                <Row>
                    <Col xl="8">
                        <h3>Karte</h3>
                        {!areaLoading ?
                            <div style={{'height': '500px', 'width': '100%'}}>
                                <MapContainer center={[51.3127114, 9.4797461]} zoom={7} style={{"height": "100%"}}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url={process.env.REACT_APP_TILE_LAYER_URL}
                                    />
                                    {masterAreas.map(area =>
                                        <MasterScenarioPlotArea
                                            key={area.id}
                                            master_area={area}
                                            activeMasterArea={activeMasterArea}
                                            setMasterArea={setMasterArea}
                                        />
                                    )}
                                </MapContainer>
                            </div> :
                            <Loading/>
                        }
                    </Col>
                    <Col xl="4">
                        <div>
                            <h4>Ausgewähltes Untersuchungsgebiet</h4>
                            {activeMasterArea &&
                                <MasterAreaShort
                                    key ={activeMasterArea.id}
                                    area={activeMasterArea}
                                    activeMasterArea={activeMasterArea}
                                    setMasterArea={setMasterArea}
                                />
                            }
                        </div>
                    </Col>
                </Row>

                <Row>
                    <h3 className='mt-1'>Übersicht Untersuchungsgebiete</h3>
                </Row>

                {!areaLoading ?
                    <MasterScenarioParameterArea parameters={parameters}/>:
                    <Loading/>
                }
                {!areaLoading ?
                    <MasterScenarioParametersTraingroup master_scenario_id={props.master_scenario.id}
                                                        parameters={parameters}/> :
                    <Loading/>
                }
                {!areaLoading ?
                    <MasterScenarioParameterCost parameters={parameters}/>:
                    <Loading/>
                }

                <Row className="mt-3">
                    <div>
                        <h3>Untersuchungsgebiete</h3>
                        {!areaLoading ?
                            <Row>
                                {masterAreas.map(area =>
                                    <Col className="mt-2 me-2" key={area.id}>
                                        <MasterAreaShort
                                            key={area.id}
                                            area={area}
                                            activeMasterArea={activeMasterArea}
                                            setMasterArea={setMasterArea}/>
                                    </Col>
                                )}
                            </Row>:
                            <Loading/>
                        }
                    </div>
                </Row>
            </div>


        </div>
    )
}

export default MasterScenarioDetails