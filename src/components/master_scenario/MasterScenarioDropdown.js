import {useEffect, useState} from "react";
import getAllMasterScenarios from "../../services/master_scenario/get_all_scenarios";
import {Dropdown} from "react-bootstrap";
import Loading from "../layout/Loading";

function MasterScenarioDropdown(props) {
    var message = ""
    const [loadingScenarioDropdown, setLoadingScenarioDropdown] = useState(true)
    const [scenarios, setScenarios] = useState(null)

    //TODO: If no props.activeScenario -> set Dummy Text for first Dropdown

    useEffect(() => {
        setLoadingScenarioDropdown(true);
        getAllMasterScenarios().then(
            (response) => {
                setScenarios(response);
                setLoadingScenarioDropdown(false);
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

    function submitChangeScenario(e) {
        e.preventDefault();
        let activeScenarioIndex = parseInt(e.target.dataset.index);
        let activeScenario = scenarios[scenarios.findIndex(object => {
            return object.id === activeScenarioIndex
        })]
        props.setActiveScenario(activeScenario);
    }

    return(
        <div>
            {!loadingScenarioDropdown ?
            <Dropdown>
                <Dropdown.Toggle variant='success' id='dropdown_masterscenario'>
                    {props.activeScenario === null ? "Szenario auswählen" : props.activeScenario.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {scenarios.map((scenario) =>
                        <Dropdown.Item key={scenario.id} data-index={scenario.id} onClick={submitChangeScenario}>{scenario.id} {scenario.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>:<Loading/>
            }
        </div>
    )
}

export default MasterScenarioDropdown
