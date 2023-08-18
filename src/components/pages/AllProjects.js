import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProjectList from "../project/ProjectList";

//All Bootstrap import
import Container from 'react-bootstrap/Container';
import ProjectListMap from "../project/ProjectMap/ProjectListMap";
import ProjectItemShort from "../project/ProjectItemShort";
import Loading from "../layout/Loading";
import {Col, Row} from "react-bootstrap";
import ProjectGroupDropdown from "../project/ProjectGroupDropdown";
import useLocalStorage from "../../services/LocalStorageHook.service";
import getFirstProjectGroup from "../../services/projectgroup/getfirstprojectgroup";
import getProjectsContentByGroup from "../../services/project_content/getprojectcontentbygroup";


function AllProjects(props) {
    const [activeProjectGroup, setActiveProjectGroup] = useLocalStorage('projectgroup', null);

    const [isloadingProjectContent, setIsloadingProjectContent] = useState(true);
    const [projectContents, setProjectContents] = useState([]);
    const [activeProjectContent, setActiveProjectContent] = useState(false)

    //TODO: Change activeProject when ProjectGroup changes to false

    if (activeProjectGroup === null) {
        getFirstProjectGroup().then(response => {
            setActiveProjectGroup(response)
        })
    }

    // getProjectContents
    useEffect(() => {
        if (activeProjectGroup == null) {
            return;
        }
        setIsloadingProjectContent(true);
        getProjectsContentByGroup(activeProjectGroup.id).then(response => {
            setProjectContents(response);
            setIsloadingProjectContent(false);
        }
    )
    }, [activeProjectGroup])

    if (isloadingProjectContent){
        return(
            <Loading/>
        );
    }

    return(
        <Container>
            <h1>Alle Projekte</h1>
            <Row>
                <Col s="auto">
                    <ProjectListMap projectscontent={projectContents} activeProject={activeProjectContent} changeActiveProject={setActiveProjectContent}/>
                </Col>
                <Col xl="4">
                    <div>
                        <h3>Auswahl Projektgruppe</h3>
                        <ProjectGroupDropdown activeProjectGroup={activeProjectGroup} setActiveProjectGroup={setActiveProjectGroup}/>
                    </div>
                    <div className="mt-3">
                        {activeProjectContent ?
                            <ProjectItemShort key={activeProjectContent.id}
                                              project={activeProjectContent}
                                              activeProject={activeProjectContent}
                                              changeActiveProject={setActiveProjectContent}
                            />:
                            <p>Projekt in Karte auswählen</p>
                        }
                    </div>
                </Col>
            </Row>

            <div>
                <h2 className='mt-5'>Liste</h2>
                <ProjectList projectscontent={projectContents} activeProject={activeProjectContent} changeActiveProject={setActiveProjectContent}/>
            </div>
        </Container>
    );
}

export default AllProjects