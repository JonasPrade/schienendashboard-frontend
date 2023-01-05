import {useState, useEffect} from "react";
import ProjectContent from "./ProjectContent";
import ProjectMap from "./ProjectMap/ProjectMap";
import ProjectContentDropdownSelector from "./ProjectContentDropdownSelector";
import {Col, Container, Row} from "react-bootstrap";

function ProjectItemLong(props) {
    const projectData = props.projectData.projectData

    const firstProjectContent = getFirstProjectContent(projectData.first_project_content)
    function getFirstProjectContent(projectcontentid) {
        if (projectData.project_contents) {
            let firstProjectContentArrayId =  projectData.project_contents.findIndex(object => {
                return object.id===projectcontentid
            })
            return projectData.project_contents[firstProjectContentArrayId]
        }
        else {
            return false
        }
    }
    const [activeProjectVariant, changeActiveProjectVariant] = useState(firstProjectContent)

    return(
        <div>
            <h2>{projectData.name}</h2>
            {projectData.description &&
                <p>{projectData.description}</p>
            }

            <Container>
                {firstProjectContent.coords_centroid &&
                    <Row className="rounded-3 bg-light">
                        <Col xl="8" className="p-2">
                            <div style={{'height': '400px', 'width': '100%'}} className='p-2'>
                                <ProjectMap geodata={firstProjectContent.projectcontent_railway_lines} centroid={firstProjectContent.coords_centroid}/>
                            </div>
                        </Col>
                        <Col xl="4" className="p-2">
                            <div>
                                <span>Dummy - Untergeordnete Projekte + etc</span>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>

            {projectData.project_contents.length>1 &&
                <Container className='mt-3 p-2 bg-light rounded-3'>
                    <h3>Projektauswahl</h3>
                    <ProjectContentDropdownSelector activeProjectVariant={activeProjectVariant} changeActiveProjectVariant={changeActiveProjectVariant} projectData={projectData}/>
                </Container>
            }

            {projectData.project_contents.length>0 &&
                <div className='mt-3 mb-3 p-2 bg-light rounded-3'>
                    <h3>{activeProjectVariant.name}</h3>
                    <ProjectContent activeProjectVariant={activeProjectVariant}/>
                </div>
            }

        </div>
    );
}

export default ProjectItemLong;