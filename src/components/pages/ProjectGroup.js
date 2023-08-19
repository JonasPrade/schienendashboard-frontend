import Container from "react-bootstrap/Container";
import { Col, Row, Spinner } from "react-bootstrap";
import ProjectGroupSelection from "../projectgroup/ProjectGroupSelection";
import { useState, useEffect } from "react";
import getprojectgroupbyid from "../../services/projectgroup/getprojectgroupbyid";
import ProjectGroupMap from "../projectgroup/ProjectGroupMap";
import useLocalStorage from "../../services/LocalStorageHook.service";
import ProjectItemShort from "../project/ProjectItemShort";

function ProjectGroup(props) {
    // Verwenden Sie den useLocalStorage Hook anstelle von useState
    const [selectedGroupIds, setSelectedGroupIds] = useLocalStorage('selectedGroupIds', []);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            if (selectedGroupIds.length === 0) return;

            setIsLoading(true);
            try {
                const projectGroups = await getprojectgroupbyid(selectedGroupIds);
                setProjects(projectGroups);
            } catch (error) {
                console.error("Fehler beim Abrufen der Projekte:", error);
            }
            setIsLoading(false);
        };

        fetchProjects();
    }, [selectedGroupIds]);

    return (
        <Container>
            <h1>Projekte</h1>
            <Row>
                <Col s="auto">
                    {isLoading ? (
                        <div className="d-flex justify-content-center mt-5">
                            <Spinner animation="border" role="status" variant="primary">
                            </Spinner>
                        </div>
                    ) : (
                        <ProjectGroupMap projectGroups={projects} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
                    )}
                </Col>
                <Col xl="4">
                    <div>
                        <ProjectGroupSelection selectedGroupIds={selectedGroupIds} setSelectedGroupIds={setSelectedGroupIds} />
                        <div className="mt-3">
                            {selectedProject && <ProjectItemShort project={selectedProject}/>}
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectGroup;
