import React, {useState} from "react";
import ProjectContent from "./ProjectContent";
import ProjectMap from "./ProjectMap/ProjectMap";
import {Alert, Col, Container, Row} from "react-bootstrap";
import ProjectListMap from "./ProjectMap/ProjectListMap";
import ProjectItemShort from "./ProjectItemShort";
import ProjectList from "./ProjectList";
import ProjectBudget from "./ProjectDetail/ProjectBudget";

function ProjectItemLong(props) {
    const project = props.project
    const [subProject, setSubProject] = useState(null)

    let map

    if (project.sub_project_contents.length > 0) {
        map =
            <div>
                <Row>
                    <h3>Teilprojekte Karte</h3>
                </Row>
                <Row>
                    <Col xl="8">
                        <ProjectListMap projectscontent={project.sub_project_contents} activeProject={subProject} changeActiveProject={setSubProject}/>
                    </Col>
                    <Col xl="4">
                        {subProject ?
                            <div>
                                <ProjectItemShort key={subProject.id}
                                                  project={subProject}
                                                  activeProject={subProject}
                                                  changeActiveProject={setSubProject}
                                />
                            </div>
                            :
                            <p>Projekt in Karte auswählen</p>
                        }
                    </Col>
                </Row>
            </div>


    } else {
        if (project.centroid === null) {
            map = <Row>
                <Col>
                    <Alert key={'info'} variant={'info'}>Keine Geo-Daten verfügbar</Alert>
                </Col>
            </Row>
        } else {
            map = <Row>
                <Col className="p-2 bg-light">
                    <div style={{'height': '400px', 'width': '100%'}} className='p-2'>
                        <ProjectMap project={project}/>
                    </div>
                </Col>
            </Row>
        }
    }

    return(
        <div className="mt-5">
            <Container>
                <h2>{project.name}</h2>
                <div>
                    {map}
                </div>
                <Row className ="mt-3">
                    <ProjectContent activeProjectVariant={project}/>
                </Row>
                {project.finve.length>0 &&
                    <Row className="mt-3">
                        <ProjectBudget project={project}/>
                    </Row>
                }
                {project.sub_project_contents.length > 0 &&
                    <Row className = "mt-3">
                        <h3>Teilprojekte Liste</h3>
                        <ProjectList projectscontent={project.sub_project_contents} activeProject={subProject} changeActiveProject={setSubProject}/>
                    </Row>
                }
                {project.superior_project_content &&
                    <Row className = "mt-3">
                        <Col>
                            <h3>Übergeordnetes Projekte</h3>
                            <ProjectItemShort
                                project={project.superior_project_content}
                            />
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    );
}

export default ProjectItemLong;