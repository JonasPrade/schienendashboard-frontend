import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function MasterScenarioShort(props) {
    let navigate = useNavigate();

    function openMasterScenario(e) {
        e.preventDefault();
        navigate(`/master_scenario/${props.scenario.id}`);
    }

    return(
        <div className='d-grid gap-2'>
            <Button variant="primary" onClick={openMasterScenario} className="me-2 mt-3" key={props.scenario.id}>
                {props.scenario.name} {props.scenario.id}
            </Button>
        </div>
    )
}

export default MasterScenarioShort
