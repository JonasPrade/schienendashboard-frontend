import Container from "react-bootstrap/Container";
import {ButtonGroup, Col, Row, Spinner, ToggleButton} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ProjectGroupMap from "../projectgroup/ProjectGroupMap";
import useLocalStorage from "../../services/LocalStorageHook.service";
import ProjectSearchList from "../project/ProjectDetail/ProjectSearchList";
import ProjectGroupMapSidebar from "../projectgroup/ProjectGroupMapSidebar";
import getprojectgroups from "../../services/projectgroup/getprojectgroups";
import ProjectsSearchByString from "../project/ProjectDetail/ProjectsSearchByString";
import ProjectGroupSelection from "../projectgroup/ProjectGroupSelection";

function ProjectGroup() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([])
    const [selectedGroupIds, setSelectedGroupIds] = useLocalStorage('selectedGroupIds', []);
    const [showSubprojects, setShowSubprojects] = useLocalStorage("show_subprojects", false);
    const [groupColors, setGroupColors] = useLocalStorage("groupColors", {});
    const [projectGroups, setProjectGroups] = useState([]); // all existing project groups
    const [loadingGroup, setIsLoadingGroup] = useState(false);
    const [selectedGroups, setSelectedGroups] = useState({}); // selected project groups
    const [switchButton, setSwitchButton]  = useState('map')

    useEffect(() => {
        setIsLoadingGroup(true);
        getprojectgroups().then((groups) => {
                setProjectGroups(groups);
                const initialState = {};
                groups.forEach(group => {
                    initialState[group.name] = selectedGroupIds.includes(group.id);
                });
                setSelectedGroups(initialState);
                setIsLoadingGroup(false);
            }
        )
    }, []);

    //set groupcolors if not Existing
    useEffect(() => {
        if (Object.keys(groupColors).length === 0) {
            const initialColors = {};
            projectGroups.forEach(group => {
                initialColors[group.name] = group.color || "#000000";
            });
            setGroupColors(initialColors);
        }
    }, [projectGroups]);

    return (
        <Container>
            <h1>Projektdashboard</h1>
            <Row className="mt-3 mb-3">
                <ButtonGroup>
                    <ToggleButton
                        key={"map"}
                        type="radio"
                        variant={switchButton === "map" ? "success":"secondary"}
                        active={switchButton === "map"}
                        onClick={() => setSwitchButton("map")}
                    >
                        Karte
                    </ToggleButton>
                    <ToggleButton
                        key={"list"}
                        type="radio"
                        variant={switchButton === "list" ? "success":"secondary"}
                        active={switchButton === "list"}
                        onClick={() => setSwitchButton("list")}
                    >
                        Liste
                    </ToggleButton>
                </ButtonGroup>
            </Row>
            {switchButton === 'map' &&
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
                                selectedProject={selectedProject}
                                setSelectedProject={setSelectedProject}
                                selectedGroupIds={selectedGroupIds}
                                groupColors={groupColors}
                            />
                        )}
                    </Col>
                    <Col lg="4">
                        {loadingGroup ? (
                            <div className="d-flex justify-content-center mt-5">
                                <Spinner animation="border" role="status" variant="primary">
                                </Spinner>
                            </div>
                        ):(
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
                                groupColors={groupColors}
                                setGroupColors={setGroupColors}
                                projectGroups={projectGroups}
                                selectedGroups={selectedGroups}
                                setSelectedGroups={setSelectedGroups}
                            />
                        )}
                    </Col>
                </Row>
            }
            {switchButton === 'list' &&
                <div>
                    <Row className="mt-3 mt-md-5">
                        <Col md={6}>
                            <ProjectsSearchByString
                                selectedGroupIds={selectedGroupIds}
                                projects={projects}
                                setProjects={setProjects}
                                showSubprojects={showSubprojects}
                                setShowSubprojects={setShowSubprojects}
                            />
                        </Col>
                        <Col md={6} className="mt-3 mt-md-0">
                            <ProjectGroupSelection
                                selectedGroupIds={selectedGroupIds}
                                setSelectedGroupIds={setSelectedGroupIds}
                                projectGroups={projectGroups}
                                selectedGroups={selectedGroups}
                                setSelectedGroups={setSelectedGroups}
                                groupColors={groupColors}
                                setGroupColors={setGroupColors}
                            />
                        </Col>
                    </Row>
                    <div className="mt-3">
                        <ProjectSearchList isLoading={isLoading} projects={projects}/>
                    </div>
                </div>

            }
        </Container>
    )
}

export default ProjectGroup;
