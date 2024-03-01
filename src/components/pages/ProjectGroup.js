import Container from "react-bootstrap/Container";
import {Col, Row, Spinner} from "react-bootstrap";
import { useState, useEffect } from "react";
import ProjectGroupMap from "../projectgroup/ProjectGroupMap";
import useLocalStorage from "../../services/LocalStorageHook.service";
import ProjectSearchList from "../project/ProjectDetail/ProjectSearchList";
import ProjectGroupMapSidebar from "../projectgroup/ProjectGroupMapSidebar";

function ProjectGroup() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedProjectId, setSelectedProjectId] = useLocalStorage("selected_project_id", null)
    const [projects, setProjects] = useState([])
    const [selectedGroupIds, setSelectedGroupIds] = useLocalStorage('selectedGroupIds', []);
    const [showSubprojects, setShowSubprojects] = useLocalStorage("show_subprojects", false);


    useEffect(()=>{
        if (selectedProject != null) {
            setSelectedProjectId(selectedProject.id)
        }
    }, [selectedProject])

    return (
        <Container>
            <h1>Projektdashboard</h1>
            <Row>
                <Col s="auto">
                    {isLoading ? (
                        <div className="d-flex justify-content-center mt-5">
                            <Spinner animation="border" role="status" variant="primary">
                            </Spinner>
                        </div>
                    ) : (
                        <ProjectGroupMap
                            projects={projects}
                            setSelectedProject={setSelectedProject}
                            selectedGroupIds={selectedGroupIds}
                        />
                    )}
                </Col>
                <Col xl="4">
                    <ProjectGroupMapSidebar
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        projects={projects}
                        setProjects={setProjects}
                        selectedProject={selectedProject}
                        selectedGroupIds={selectedGroupIds}
                        setSelectedGroupIds={setSelectedGroupIds}
                        showSubprojects={showSubprojects}
                        setShowSubprojects={setShowSubprojects}
                    />
                </Col>
            </Row>
            <Row className="mt-5">
                <h3>Projektliste</h3>
                <ProjectSearchList isLoading={isLoading} projects={projects}/>
            </Row>
        </Container>
    )
}

export default ProjectGroup;
