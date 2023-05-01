import {useEffect, useState} from "react";
import MasterScenarioDropdown from "../master_scenario/MasterScenarioDropdown";
import TimetableTrainCostDiagramm from "./TimetableTrainCostDiagramm";
import getTrainCostForTraingroupAndScenario from "../../services/lines/train_cost_for_traingroup_scenario";
import TimetableTrainCostTable from "./TimetableTrainCostTable";
import {Col, Row} from "react-bootstrap";


function TimetableTrainGroupCost(props) {
    const [loadingTrainCost, setLoadingTrainCost] = useState(true)
    const [ScenarioTrainCost, setScenarioTrainCost] = useState(null)
    const [trainCosts, setTrainCosts] = useState(null)

    useEffect(() => {
        if (ScenarioTrainCost === null) {
            return
        }
        setLoadingTrainCost(true);
        getTrainCostForTraingroupAndScenario(ScenarioTrainCost.id, props.activeLine.id).then(
            (response) => {
                setTrainCosts(response);
                setLoadingTrainCost(false);
            }
        )
    }, [ScenarioTrainCost, props.activeLine.id])

    return(
        <div>
            <h3 className="mt-3">Kosten Traktionsarten</h3>
            <MasterScenarioDropdown activeScenario={ScenarioTrainCost} setActiveScenario={setScenarioTrainCost}/>
            {!loadingTrainCost &&
                <div>
                    <Row>
                        <TimetableTrainCostDiagramm loadingTrainCost={loadingTrainCost} trainCosts={trainCosts}/>
                    </Row>
                    <Row className="mt-3">
                        {trainCosts.map(trainCost =>
                            <Col xl="4">
                                <TimetableTrainCostTable key={trainCost.id} trainCost={trainCost}/>
                            </Col>
                            )}
                    </Row>
                </div>
            }
        </div>
    )
}

export default TimetableTrainGroupCost