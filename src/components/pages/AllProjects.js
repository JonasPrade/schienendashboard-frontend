import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProjectList from "../project/ProjectList";

//All Bootstrap import
import Container from 'react-bootstrap/Container';
import ProjectListMap from "../project/ProjectMap/ProjectListMap";
import ProjectItemShort from "../project/ProjectItemShort";
import getProjectContent from "../../services/getproject.service";
import Loading from "../layout/Loading";
import {Col, Row} from "react-bootstrap";
import getProjectsByGroup from "../../services/projects/getprojectsbygroup";
import ProjectGroupDropdown from "../project/ProjectGroupDropdown";
import useLocalStorage from "../../services/LocalStorageHook.service";
import getFirstProjectGroup from "../../services/projects/getfirstprojectgroup";


function AllProjects(props) {
    const [activeProjectGroup, setActiveProjectGroup] = useLocalStorage('projectgroup', null);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedProjects, setLoadedProjects] = useState([]);
    const [activeProjectData, setActiveProjectData] = useState(false)
    const API_URL = process.env.REACT_APP_API_URL
    var activeProjecthtml;

    //TODO: Change activeProject when ProjectGroup changes to false

    if (activeProjectGroup === null) {
        getFirstProjectGroup().then(response => {
            setActiveProjectGroup(response)
        })
    }

    // Get Projects
    useEffect(() => {
        setIsLoading(true);
        getProjectsByGroup(activeProjectGroup.id).then(response => {
            const projects = response
            setLoadedProjects(projects);
            setIsLoading(false);
        })
    }, [activeProjectGroup])

    // Loads active Project
    useEffect(() => {
        getProjectContent(props.activeProject).then(
            (response) => {
                const activeProjectData = response
                setActiveProjectData(activeProjectData)
            }
        )
    }, [props.activeProject]);

    if (isLoading){
        return(
            <Loading/>
        );
    }

    if (props.activeProject && activeProjectData && !isLoading) {
        activeProjecthtml =  <div className='mt-3'>
            <h3>aktives Projekt</h3>
            <div>
                <ProjectItemShort
                    key={activeProjectData.id}
                    project={activeProjectData}

                    activeProject={props.activeProject}
                    changeActiveProject={props.changeActiveProject}
                />
            </div>
        </div>
    } else if (isLoading) {
        activeProjecthtml = <Loading/>
    } else {
        activeProjecthtml = <p>Projekt auswählen</p>
    }

    return(
        <Container>
            <h1>Alle Projekte</h1>
            <Row>
                <Col s="auto">
                    <div style={{'height': '800px', 'width': '100%'}}>
                        <ProjectListMap projects={loadedProjects} activeProject={props.activeProject} changeActiveProject={props.changeActiveProject}/>
                    </div>
                </Col>
                <Col xl="4">
                    <div>
                        <h3>Auswahl Projektgruppe</h3>
                        <ProjectGroupDropdown activeProjectGroup={activeProjectGroup} setActiveProjectGroup={setActiveProjectGroup}/>
                    </div>
                    <div>
                        {activeProjecthtml}
                    </div>
                </Col>
            </Row>

            <div>
                <h2 className='mt-5'>Liste</h2>
                <ProjectList projects={loadedProjects} activeProject={props.activeProject} changeActiveProject={props.changeActiveProject}/>
            </div>
        </Container>
    );
}

export default AllProjects