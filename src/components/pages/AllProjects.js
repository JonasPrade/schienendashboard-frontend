import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProjectList from "../project/ProjectList";
import UserService from "../../services/user.service"

//All Bootstrap import
import Container from 'react-bootstrap/Container';
import checkValidToken from "../../services/CheckToken.service";
import {Navigate} from "react-router-dom";
import Authenticate from "../user/Authenticate";
import ProjectListMap from "../project/ProjectListMap";
import ProjectItemShort from "../project/ProjectItemShort";
import getProjectContent from "../../services/getproject.service";


function AllProjects(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedProjects, setLoadedProjects] = useState([]);
    const [activeProjectData, setActiveProjectData] = useState(false)
    const API_URL = process.env.REACT_APP_API_URL
    var activeProjecthtml;

    // TODO:Change that to use "use.service.js -> getProjects

    useEffect(() => {
        setIsLoading(true);
        //checkValidToken(props);
        axios.get(API_URL + "projects").then(response => {
            const projects = response.data.projects
            setIsLoading(false);
            setLoadedProjects({projects});
        })
    }, []);

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
            <section>
                <p>Loading...</p>
            </section>
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
        activeProjecthtml = <p>lädt</p>
    } else {
        activeProjecthtml = <p>Projekt auswählen</p>
    }

    return(
        <Container>
            <h1>Alle Projekte</h1>
            <h2>Karte</h2>
                <div style={{'height': '400px', 'width': '100%'}}>
                    <ProjectListMap projectslist={loadedProjects} activeProject={props.activeProject} changeActiveProject={props.changeActiveProject}/>
                </div>
                {activeProjecthtml}
            <div>
                <h2 className='mt-5'>Liste</h2>
                <ProjectList projectslist={loadedProjects} activeProject={props.activeProject} changeActiveProject={props.changeActiveProject}/>
            </div>
        </Container>
    );
}

export default AllProjects