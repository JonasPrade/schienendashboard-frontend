import {Spinner} from "react-bootstrap";
import ProjectsSearchByString from "../project/ProjectDetail/ProjectsSearchByString";
import ProjectGroupSelection from "./ProjectGroupSelection";
import ProjectItemShort from "../project/ProjectItemShort";
import React, {useState} from "react";
import PopupField from "../layout/PopupField";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectGroupMapSidebar(props) {
    const [showProjectGroup, setShowPopup] = useState(false);

    return(
        <div>

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
                <Button onClick={() => setShowPopup(true)}>
                    Projektgruppen wählen
                </Button>
                {showProjectGroup &&
                    <PopupField show={showProjectGroup} setShow={setShowPopup} header={"Projektgruppen auswählen"}
                                content={
                                    <ProjectGroupSelection
                                        selectedGroupIds={props.selectedGroupIds}
                                        setSelectedGroupIds={props.setSelectedGroupIds}
                                        projectGroups={props.projectGroups}
                                        selectedGroups={props.selectedGroups}
                                        setSelectedGroups={props.setSelectedGroups}
                                        groupColors={props.groupColors}
                                        setGroupColors={props.setGroupColors}
                                        setIsLoadingSearch={props.setIsLoadingSearch}
                                        searchHistoryRef={props.searchHistoryRef}
                                        setProjects={props.setProjects}
                                    />
                                }
                    />
                }
            </div>
            <div className="mt-3">
                {props.selectedProject &&
                    <div>
                        <h3>Ausgewähltes Projekt:</h3>
                        <ProjectItemShort project={props.selectedProject}/>
                    </div>
                }
            </div>
            {props.selectedGroupIds.length === 0 &&
            <div>
                <Card className="bg-light border-website border-3 mt-3">
                    <Card.Body>
                        <Card.Title>⚠️ Keine Projektgruppe ausgewählt</Card.Title>
                        <Card.Text>
                            Aktuell ist keine Projektgruppe ausgewählt. Um Projekte zu finden (auch über die Suche)
                            wähle bitte mindestens eine Projektgruppe aus. Klicke dafür auf den Button und setze die
                            Haken bei den gewünschten Projektgruppen. Bestätige die Auswahl, indem du den Button
                            "Projektgruppe auswählen" drückst.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            }
        </div>
    )
}

export default ProjectGroupMapSidebar;