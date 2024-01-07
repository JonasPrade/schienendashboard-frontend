import {Spinner} from "react-bootstrap";
import ProjectsSearchByString from "../project/ProjectDetail/ProjectsSearchByString";
import ProjectGroupSelection from "./ProjectGroupSelection";
import ProjectItemShort from "../project/ProjectItemShort";
import {useState} from "react";

function ProjectGroupMapSidebar(props) {
    return(
        <div>
            {props.isLoading ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status" variant="primary">
                    </Spinner>
                </div>
            ):(
                <ProjectsSearchByString
                    selectedGroupIds={props.selectedGroupIds}
                    projects={props.projects}
                    setProjects={props.setProjects}
                    setIsLoading={props.setIsLoading}
                    showSubprojects={props.showSubprojects}
                    setShowSubprojects={props.setShowSubprojects}
                />
            )}
            <div className="mt-3">
                <ProjectGroupSelection
                    selectedGroupIds={props.selectedGroupIds}
                    setSelectedGroupIds={props.setSelectedGroupIds}
                />
            </div>
            <div className="mt-3">
                {props.selectedProject && <ProjectItemShort project={props.selectedProject}/>}
            </div>
        </div>
    )
}

export default ProjectGroupMapSidebar;