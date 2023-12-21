import {Row} from "react-bootstrap";
import ProjectDetailFinVe from "./ProjectDetailFinVe";

function ProjectBudget(props) {

    return(
        <div>
            <h4>Budget</h4>
            {props.project.finve.map((finve)=>(
                <Row key={finve.id}>
                    <ProjectDetailFinVe finve={finve}/>
                </Row>
            )
            )}
        </div>
    )
}

export default ProjectBudget