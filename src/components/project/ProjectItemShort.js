import {Link} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ProjectGroupBadge from "./ProjectGroupBadge";
import ProjectDetailContent from "./ProjectDetail/ProjectDetailContent";
import ProjectDetailEffects from "./ProjectDetail/ProjectDetailEffects";
import {Col, Row} from "react-bootstrap";
import ProjectProgress from "./ProjectDetail/ProjectProgress";

function ProjectItemShort(props) {
    const project = props.project

    // TODO: make the badges responsive to open the Project Groups with all there Projects.
    return(
        <Card className="bg-light h-100">
            <Card.Header className="bg-light">
                <ProjectDetailContent activeProjectVariant={project}/>
            </Card.Header>
            <Card.Body className="bg-background">
                <Card.Title>
                    {project.name}
                </Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
            </Card.Body>
            <Card.Body className="bg-background">
                <ProjectProgress project={project}/>
                <Link to={'/project/'+project.id}>
                    <Button variant='outline-info'>
                        Mehr Informationen
                    </Button>
                </Link>
            </Card.Body>
            {project.projectcontent_groups ?
                <Card.Footer className="bg-light">
                    <Row>
                        <Col>
                            {project.projectcontent_groups.map((project_group) => (
                                <ProjectGroupBadge
                                    key = {project_group.id}
                                    name = {project_group.name}
                                />)
                            )}
                        </Col>
                        <Col>
                            <ProjectDetailEffects activeProjectVariant={project}/>
                        </Col>
                    </Row>
                </Card.Footer> :
                <Card.Footer className="bg-light">
                    <Row>
                        <Col>
                            <ProjectDetailEffects activeProjectVariant={project}/>
                        </Col>
                    </Row>
                </Card.Footer>
            }
        </Card>
    );
}

export default ProjectItemShort