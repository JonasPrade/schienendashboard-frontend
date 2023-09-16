import ProjectItemShort from "./ProjectItemShort";

import Stack from 'react-bootstrap/Stack'
import {Col, Row} from "react-bootstrap";


function ProjectList(props) {
    return(
        <Row>
            {props.projectscontent.map((project) => (
                <Col key={project.id} xs={12} sm={6} md={4} className="mb-3">
                    <ProjectItemShort
                        key={project.id}
                        project={project}
                        activeProject={props.activeProject}
                        changeActiveProject={props.changeActiveProject}
                    />
                </Col>
                )
            )}
        </Row>
    );
}

export default ProjectList;

