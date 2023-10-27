import Container from "react-bootstrap/Container";
import {Col, Row, Spinner} from "react-bootstrap";
import ProjectGroupSelection from "../projectgroup/ProjectGroupSelection";
import { useState, useEffect } from "react";
import getprojectgroupbyid from "../../services/projectgroup/getprojectgroupbyid";
import ProjectGroupMap from "../projectgroup/ProjectGroupMap";
import useLocalStorage from "../../services/LocalStorageHook.service";
import ProjectItemShort from "../project/ProjectItemShort";
import ProjectList from "../project/ProjectList";

function ProjectGroup() {
    const [selectedGroupIds, setSelectedGroupIds] = useLocalStorage('selectedGroupIds', []);
    const [projectGroups, setProjectGroups] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            if (selectedGroupIds.length === 0) return;

            setIsLoading(true);
            try {
                const projectGroups = await getprojectgroupbyid(selectedGroupIds);
                setProjectGroups(projectGroups);
            } catch (error) {
                console.error("Fehler beim Abrufen der Projekte:", error);
            }
            setIsLoading(false);
        };

        fetchProjects();
    }, [selectedGroupIds]);

    return (
        <Container>
            <h1>Projektgruppen</h1>
            <Row>
                <Col s="auto">
                    {isLoading ? (
                        <div className="d-flex justify-content-center mt-5">
                            <Spinner animation="border" role="status" variant="primary">
                            </Spinner>
                        </div>
                    ) : (
                        <ProjectGroupMap projectGroups={projectGroups} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
                    )}
                </Col>
                <Col xl="4">
                    {isLoading ? (
                        <div className="d-flex jsutify-content-start mt-5">
                            <h3>Projektauswahl:</h3>
                            <div className="d-flex justify-content-center mt-5">
                                <Spinner animation="border" role="status" variant="primary">
                                </Spinner>
                            </div>

                        </div>
                    ) : (
                        <div>
                            <ProjectGroupSelection selectedGroupIds={selectedGroupIds} setSelectedGroupIds={setSelectedGroupIds} />
                            <div className="mt-3">
                                {selectedProject && <ProjectItemShort project={selectedProject}/>}
                            </div>
                        </div>
                    )}
                </Col>
            </Row>
            {isLoading ? (
                <div>
                    <h3>Projektliste</h3>
                    <div className="d-flex justify-content-center mt-5">
                        <Spinner animation="border" role="status" variant="primary">
                        </Spinner>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="mt-5">Projektliste</h3>
                    {projectGroups.map((group) =>  (
                        <Row className="mt-3" key={group.id}>
                            <h4>{group.name}</h4>
                            <ProjectList projectscontent={group.projects_content}/>
                        </Row>
                    ))}
                </div>
            )}

        </Container>
    )
}

export default ProjectGroup;
