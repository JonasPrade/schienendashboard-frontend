import {Spinner} from "react-bootstrap";
import ProjectsSearchByString from "../project/ProjectDetail/ProjectsSearchByString";
import ProjectGroupSelection from "./ProjectGroupSelection";
import ProjectItemShort from "../project/ProjectItemShort";
import React, {useState} from "react";

function ProjectGroupMapSidebar(props) {
    return(
        <div>
            <div className="mt-3">
                {props.selectedProject &&
                    <div>
                        <h3>Ausgewähltes Projekt:</h3>
                        <ProjectItemShort project={props.selectedProject}/>
                    </div>
                }
            </div>
            {props.isLoading ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status" variant="primary">
                    </Spinner>
                </div>
            ) : (
                <div className="mt-3">
                    <ProjectsSearchByString
                        selectedGroupIds={props.selectedGroupIds}
                        projects={props.projects}
                        setProjects={props.setProjects}
                        setIsLoading={props.setIsLoading}
                        showSubprojects={props.showSubprojects}
                        setShowSubprojects={props.setShowSubprojects}
                    />
                </div>
            )}
            <div className="mt-3">
                <ProjectGroupSelection
                    selectedGroupIds={props.selectedGroupIds}
                    setSelectedGroupIds={props.setSelectedGroupIds}
                />
            </div>

        </div>
    )
}

export default ProjectGroupMapSidebar;