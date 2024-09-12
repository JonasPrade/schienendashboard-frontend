import Container from "react-bootstrap/Container";
import {ButtonGroup, Col, Row, Spinner, ToggleButton} from "react-bootstrap";
import React, {useState, useEffect, useRef} from "react";
import ProjectGroupMap from "../projectgroup/ProjectGroupMap";
import useLocalStorage from "../../services/LocalStorageHook.service";
import ProjectGroupMapSidebar from "../projectgroup/ProjectGroupMapSidebar";
import getprojectgroups from "../../services/projectgroup/getprojectgroups";
import ProjectSearchList from "../project/ProjectDetail/ProjectSearchList";
import ProjectGroupSelection from "../projectgroup/ProjectGroupSelection";

function ProjectGroup() {
    const [isLoadingGroups, setIsLoadingGroups] = useState(false);
    const [isLoadingSearch, setIsLoadingSearch] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([])
    const [selectedGroupIds, setSelectedGroupIds] = useLocalStorage('selectedGroupIds', []);
    const [showSubprojects, setShowSubprojects] = useLocalStorage("show_subprojects", false);
    const [groupColors, setGroupColors] = useLocalStorage("groupColors", {});
    const [projectGroups, setProjectGroups] = useState([]); // all existing project groups
    const [loadingGroup, setIsLoadingGroup] = useState(false);
    const [selectedGroups, setSelectedGroups] = useState({}); // selected project groups
    const [switchButton, setSwitchButton]  = useState('map')
    const searchHistoryRef = useRef();

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
            <Row>
                <Col lg="4">
                    <ProjectGroupMapSidebar
                        isLoading={isLoadingGroups}
                        setIsLoading={setIsLoadingGroups}
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
                        searchHistoryRef={searchHistoryRef}
                        isLoadingSearch={isLoadingSearch}
                        setIsLoadingSearch={setIsLoadingSearch}
                    />
                </Col>
                <Col s="auto" className="mt-3 mt-lg-0">
                    <div className="mb-3">
                        <ButtonGroup className="w-100">
                            <ToggleButton
                                key={"map"}
                                id="map"
                                type="radio"
                                variant={switchButton === "map" ? "success" : "secondary"}
                                active={switchButton === "map"}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSwitchButton("map")
                                }}
                            >
                                Karte
                            </ToggleButton>
                            <ToggleButton
                                key={"list"}
                                id="list"
                                type="radio"
                                variant={switchButton === "list" ? "success" : "secondary"}
                                active={switchButton === "list"}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setSwitchButton("list")
                                }}
                            >
                                Liste
                            </ToggleButton>
                        </ButtonGroup>
                    </div>
                    {switchButton === 'map' &&
                        <div>
                            {isLoadingGroups ? (
                                <div className="d-flex justify-content-center mt-5">
                                    <Spinner animation="border" role="status" variant="primary">
                                    </Spinner>
                                </div>
                            ) : (
                                <div>
                                    <ProjectGroupMap
                                        projects={projects}
                                        selectedProject={selectedProject}
                                        setSelectedProject={setSelectedProject}
                                        selectedGroupIds={selectedGroupIds}
                                        groupColors={groupColors}
                                    />

                                </div>
                            )}
                        </div>
                    }
                    {switchButton === 'list' &&
                        <ProjectSearchList isLoading={isLoadingGroups} projects={projects}/>
                    }
                    <div className="mt-3">
                        {selectedGroupIds ?
                            <ProjectGroupSelection
                                selectedGroupIds={selectedGroupIds}
                                setSelectedGroupIds={setSelectedGroupIds}
                                projectGroups={projectGroups}
                                selectedGroups={selectedGroups}
                                setSelectedGroups={setSelectedGroups}
                                groupColors={groupColors}
                                setGroupColors={setGroupColors}
                                setIsLoadingSearch={setIsLoadingSearch}
                                searchHistoryRef={searchHistoryRef}
                                setProjects={setProjects}
                            /> :
                            <p>
                                Bitte wählen Sie eine Projektgruppe aus.
                            </p>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectGroup;
