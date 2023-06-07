import {Link, useNavigate} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ProjectGroupBadge from "./ProjectGroupBadge";
import ProjectDetailContent from "./ProjectDetail/ProjectDetailContent";
import ProjectDetailEffects from "./ProjectDetail/ProjectDetailEffects";
import {Col, Row} from "react-bootstrap";
import ProjectProgress from "./ProjectDetail/ProjectProgress";

function ProjectItemShort(props) {
    let navigate = useNavigate();
    const project = props.project

    function openProjectlong(e) {
        e.preventDefault();
        // props.changeActiveProject(project)
        navigate(`/project/${project.id}`, { replace: true });
    }

    // TODO: make the badges responsive to open the Project Groups with all there Projects.
    return(
        <Card className="bg-light">
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
                    <Button variant='outline-info' onClick={openProjectlong}>
                        Mehr Informationen
                    </Button>
                </Link>
            </Card.Body>
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
            </Card.Footer>
        </Card>
    );
}

export default ProjectItemShort