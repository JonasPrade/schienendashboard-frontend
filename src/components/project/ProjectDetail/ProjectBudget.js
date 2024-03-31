import {Row} from "react-bootstrap";
import FinveItemShort from "../../finanzierung/FinveItemShort";

function ProjectBudget(props) {

    return(
        <div>
            <h4>Budget</h4>
            {props.project.finve.map((finve)=>(
                <Row key={finve.id}>
                    <FinveItemShort finve={finve} showDiagrams={true} showButtonLong={false}/>
                </Row>
            )
            )}
        </div>
    )
}

export default ProjectBudget