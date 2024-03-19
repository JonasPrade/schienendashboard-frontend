import {Spinner} from "react-bootstrap";
import ProjectsSearchByString from "../project/ProjectDetail/ProjectsSearchByString";
import ProjectGroupSelection from "./ProjectGroupSelection";
import ProjectItemShort from "../project/ProjectItemShort";
import React from "react";

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
                        showSubprojects={props.showSubprojects}
                        setShowSubprojects={props.setShowSubprojects}
                        searchHistoryRef={props.searchHistoryRef}
                        isLoadingSearch={props.isLoadingSearch}
                        setIsLoadingSearch={props.setIsLoadingSearch}
                    />
                </div>
            )}
            <div className="mt-3">
                <ProjectGroupSelection
                    selectedGroupIds={props.selectedGroupIds}
                    setSelectedGroupIds={props.setSelectedGroupIds}
                    projectGroups={props.projectGroups}
                    selectedGroups={props.selectedGroups}
                    setSelectedGroups={props.setSelectedGroups}
                    groupColors={props.groupColors}
                    setGroupColors={props.setGroupColors}
                    isLoadingSearch={props.isLoadingSearch}
                    setIsLoadingSearch={props.setIsLoadingSearch}
                    searchHistoryRef={props.searchHistoryRef}
                    setProjects={props.setProjects}
                />
            </div>

        </div>
    )
}

export default ProjectGroupMapSidebar;