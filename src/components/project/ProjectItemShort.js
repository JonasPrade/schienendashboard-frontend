import { useNavigate } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ProjectGroupBadge from "./ProjectGroupBadge";
import ProjectDetailContent from "./ProjectDetail/ProjectDetailContent";

function ProjectItemShort(props) {
    let navigate = useNavigate();
    const project = props.project
    const id = project.id
    const firstProjectContent = getFirstProjectContent(props.project.first_project_content)

    function getFirstProjectContent(projectcontentid) {
        if (props.project.project_contents) {
            let firstProjectContentArrayId =  props.project.project_contents.findIndex(object => {
                return object.id===projectcontentid
            })
            return props.project.project_contents[firstProjectContentArrayId]
        }
        else {
            return false
        }
    }

    function openProjectlong(e) {
        e.preventDefault();
        props.changeActiveProject(id)
        navigate('/project', { replace: true });
    }

    // TODO: make the badges responsive to open the Project Groups with all there Projects.
    return(
        <Card>
            <Card.Header>
                {project.project_contents.length>0 &&
                    <ProjectDetailContent activeProjectVariant={firstProjectContent}/>
                }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {project.name}
                </Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <Button variant='outline-info' onClick={openProjectlong}>
                    Mehr Informationen
                </Button>
            </Card.Body>
            {firstProjectContent &&
                <Card.Footer>
                    Teil von:
                    {firstProjectContent.projectcontent_groups.map((project_group) => (
                        <ProjectGroupBadge
                            key = {project_group.id}
                            name = {project_group.name}
                        />)
                    )}
                </Card.Footer>
            }
        </Card>
    );
}

export default ProjectItemShort