import React, {useState} from "react";
import ProjectContent from "./ProjectContent";
import ProjectMap from "./ProjectMap/ProjectMap";
import {Alert, Col, Container, Row} from "react-bootstrap";
import ProjectListMap from "./ProjectMap/ProjectListMap";
import ProjectItemShort from "./ProjectItemShort";
import ProjectList from "./ProjectList";

function ProjectItemLong(props) {
    const project = props.project
    const [subProject, setSubProject] = useState(null)

    let map = null

    if (project.sub_project_contents.length > 0) {
        map = <Row>
            <Col xl="8" className="p-2 bg-light">
                <h3>Teilprojekte Karte</h3>
                <ProjectListMap projectscontent={project.sub_project_contents} activeProject={subProject} changeActiveProject={setSubProject}/>
            </Col>
            <Col xl="4">
                {subProject ?
                    <ProjectItemShort key={subProject.id}
                                      project={subProject}
                                      activeProject={subProject}
                                      changeActiveProject={setSubProject}
                    />:
                    <p>Projekt in Karte auswählen</p>
                }
            </Col>
        </Row>

    } else {
        if (project.centroid === null && project.railway_stations.length === 0) {
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
                {project.sub_project_contents.length > 0 &&
                    <Row className = "mt-3">
                        <h3>Teilprojekte Liste</h3>
                        <ProjectList projectscontent={project.sub_project_contents} activeProject={subProject} changeActiveProject={setSubProject}/>
                    </Row>
                }
                {project.superior_project_content &&
                    <Row className = "mt-3 bg-background">
                        <h3>Übergeordnetes Projekte</h3>
                        <ProjectItemShort
                            project={project.superior_project_content}
                        />
                    </Row>
                }

                <Row className ="mt-3">
                    <ProjectContent activeProjectVariant={project}/>
                </Row>
            </Container>
        </div>
    );
}

export default ProjectItemLong;