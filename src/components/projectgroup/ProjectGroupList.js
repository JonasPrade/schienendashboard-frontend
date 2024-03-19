import {Col, Row} from "react-bootstrap";
import ProjectsSearchByString from "../project/ProjectDetail/ProjectsSearchByString";
import ProjectGroupSelection from "./ProjectGroupSelection";
import ProjectSearchList from "../project/ProjectDetail/ProjectSearchList";
import React from "react";

function ProjectGroupList(props) {
    return (
        <div>
            <Row className="mt-3 mt-md-5">
                <Col md={6}>
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
                </Col>
                <Col md={6} className="mt-3 mt-md-0">
                    <ProjectGroupSelection
                        selectedGroupIds={props.selectedGroupIds}
                        setSelectedGroupIds={props.setSelectedGroupIds}
                        projectGroups={props.projectGroups}
                        selectedGroups={props.selectedGroups}
                        setSelectedGroups={props.setSelectedGroups}
                        groupColors={props.groupColors}
                        setGroupColors={props.setGroupColors}
                        searchHistoryRef={props.searchHistoryRef}
                        isLoadingSearch={props.isLoadingSearch}
                        setIsLoadingSearch={props.setIsLoadingSearch}
                        setProjects={props.setProjects}
                    />
                </Col>
            </Row>
            <div className="mt-3">
                <ProjectSearchList isLoading={props.isLoading} projects={props.projects}/>
            </div>
        </div>
    )
}

export default ProjectGroupList;
