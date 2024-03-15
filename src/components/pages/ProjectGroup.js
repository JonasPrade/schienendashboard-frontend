import Container from "react-bootstrap/Container";
import {Col, Row, Spinner} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import ProjectGroupMap from "../projectgroup/ProjectGroupMap";
import useLocalStorage from "../../services/LocalStorageHook.service";
import ProjectSearchList from "../project/ProjectDetail/ProjectSearchList";
import ProjectGroupMapSidebar from "../projectgroup/ProjectGroupMapSidebar";
import getprojectgroups from "../../services/projectgroup/getprojectgroups";

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
                <Col xl="4">
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
            <Row className="mt-5">
                <h3>Projektliste</h3>
                <ProjectSearchList isLoading={isLoading} projects={projects}/>
            </Row>
        </Container>
    )
}

export default ProjectGroup;
