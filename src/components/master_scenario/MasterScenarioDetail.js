import {Alert, Col, Row} from "react-bootstrap";
import MasterAreaShort from "../master_area/MasterAreaShort";
import {useState} from "react";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import {useEffect} from "react";
import getMainMasterAreaForScenario from "../../services/master_areas/main_master_area_service";
import Loading from "../layout/Loading";
import MasterScenarioMaps from "./MasterScenarioMap";


Chart.register(
    ArcElement,
    Tooltip,
    Legend
);

function MasterScenarioDetails(props) {
    const [masterAreas, setMasterAreas] = useState(null)
    const [areaLoading, setAreaLoading] = useState(true)
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

    // useEffect(() => {
    //     setParameters(master_area_calc_parameters(masterAreas))
    // }, [masterAreas])

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
            {areaLoading &&
                <Alert key={'danger'} variant={'danger'}>Laden des Szenarios dauert ungefähr eine Minute</Alert>
            }


            <div>
                <MasterScenarioMaps areaLoading={areaLoading} masterAreas={masterAreas} />



                <Row>
                    <h3 className='mt-1'>Übersicht Untersuchungsgebiete</h3>
                </Row>

                {/*{!areaLoading ?*/}
                {/*    <MasterScenarioParameterArea parameters={parameters}/>:*/}
                {/*    <Loading/>*/}
                {/*}*/}
                {/*{!areaLoading ?*/}
                {/*    <MasterScenarioParametersTraingroup master_scenario_id={props.master_scenario.id}*/}
                {/*                                        parameters={parameters}/> :*/}
                {/*    <Loading/>*/}
                {/*}*/}
                {/*{!areaLoading ?*/}
                {/*    <MasterScenarioParameterCost parameters={parameters}/>:*/}
                {/*    <Loading/>*/}
                {/*}*/}

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
                                            />
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