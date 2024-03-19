import ProjectItemShort from "./ProjectItemShort";

import Stack from 'react-bootstrap/Stack'
import {Col, Row} from "react-bootstrap";


function ProjectList(props) {
    return(
        <Row>
            {props.projectscontent.map((project) => (
                <Col key={project.id} xs={12} md={6} lg={4} className="mb-3">
                    <ProjectItemShort
                        key={project.id}
                        project={project}
                    />
                </Col>
                )
            )}
        </Row>
    );
}

export default ProjectList;

