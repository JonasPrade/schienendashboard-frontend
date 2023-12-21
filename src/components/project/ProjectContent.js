import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import ProjectDetailContent from "./ProjectDetail/ProjectDetailContent";
import ProjectGroupBadge from "./ProjectGroupBadge";
import ProjectDetailEffects from "./ProjectDetail/ProjectDetailEffects";
import ProjectProgress from "./ProjectDetail/ProjectProgress";
import AllTextWebsites from "../texts/AllTextWebsites";
import AllTextInfo from "../texts/AllTextInfo";

function ProjectContent(props) {
    const project = props.activeProjectVariant  // the activeProjectVariant is an not used anymore feature. But the name is still there. New features can now also use the variable project

    function checkMemberProjectGroup(projectgroup_id) {
        return project.projectcontent_groups.some(project => project.id === projectgroup_id);
    }

    return(
        <div>
            <div id="projectContent">
                <h3>Projektinhalt</h3>
                <Row className="pt-3 pb-3 bg-light rounded">
                    <Col xl="6">
                        <ProjectDetailContent activeProjectVariant={props.activeProjectVariant}/>
                    </Col>
                    <Col xl="4">
                        <ProjectDetailEffects activeProjectVariant={props.activeProjectVariant}/>
                    </Col>
                    <Col xl="2" className="float-end">
                        {props.activeProjectVariant.projectcontent_groups.map((project_group) => (
                            <ProjectGroupBadge
                                key = {project_group.id}
                                name = {project_group.name}
                            />)
                        )}
                    </Col>
                </Row>


                <p className="mt-2"> Projektnummer: {props.activeProjectVariant.project_number}</p>

                {props.activeProjectVariant.priority &&
                    <p> Priorität: {props.activeProjectVariant.priority}</p>
                }

                {props.activeProjectVariant.description &&
                    <p className="mt-2">Projektinhalt: {props.activeProjectVariant.description}</p>
                }

                {props.activeProjectVariant.reason_project &&
                    <p className="mt-2">Begründung: {props.activeProjectVariant.reason_project}</p>
                }

            </div>

            {/*<div id="projectStatus">*/}
            {/*    <h4 className="mb-2 mt-2">Projektstatus</h4>*/}
            {/*    <ProjectDetailStatus activeProjectVariant={props.activeProjectVariant}/>*/}
            {/*</div>*/}

            <div>
                <h4 className="mb-2 mt-2">Umsetzung</h4>
                <ProjectProgress project={props.activeProjectVariant}/>
            </div>

            {checkMemberProjectGroup(1) &&
            <div className="mb-2 mt-2">
                <h4 >Kennzahlen</h4>
                <span>Die BVWP Kennzahlen (sofern BVWP-Projekt) werden demnächst hier angezeigt</span>
            </div>
            }



            {props.activeProjectVariant.texts.length >0 &&
            <div className="mt-5">
                <h4>Hinweise</h4>
                <div className="mt-3">
                    <AllTextInfo project={props.activeProjectVariant}/>
                </div>
                <div className="mt-3">
                    <AllTextWebsites project={props.activeProjectVariant}/>
                </div>
            </div>
            }
        </div>


    );
}

export default ProjectContent