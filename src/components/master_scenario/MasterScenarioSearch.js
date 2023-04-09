import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {Row, Container, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import getMasterScenarioById from "../../services/master_scenario/master_scenario_service";
import getAllMasterScenarios from "../../services/master_scenario/get_all_scenarios";
import MasterScenarioShort from "./MasterScenarioShort";

function MasterScenarioSearch(props) {
    const masterscenarioidInputRef = useRef()
    var message = ""
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [scenarios, setScenarios] = useState(null)

    function submitMasterScenario(e) {
        e.preventDefault();
        const masterscenario_id = masterscenarioidInputRef.current.value;
        navigate(`/master_scenario/${masterscenario_id}`);
    }

    useEffect(() => {
        setLoading(true);
        getAllMasterScenarios().then(
            (response) => {
                setScenarios(response);
                setLoading(false);
            },
            error => {
                message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        )
        }, []);

    return(
        <Container>
            <div className="mt-3">
                <h4>Auswahl Szenarien</h4>
                <Row>
                    {scenarios && scenarios.map(scenario =>
                        <Col xl='6' key={scenario.id}>
                            <MasterScenarioShort
                                key={scenario.id}
                                scenario={scenario}
                            />
                        </Col>
                    )}
                </Row>


            </div>
        </Container>

    )
}

export default MasterScenarioSearch
