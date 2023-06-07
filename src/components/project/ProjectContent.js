import {Alert, Button, ButtonGroup, Col, Row} from "react-bootstrap";
import {useState} from "react";
import ProjectDetailBewertung from "./ProjectDetail/ProjectDetailBewertung";
import ProjectDetailContent from "./ProjectDetail/ProjectDetailContent";
import ProjectGroupBadge from "./ProjectGroupBadge";
import ProjectDetailStatus from "./ProjectDetail/ProjectDetailStatus";
import ProjectMap from "./ProjectMap/ProjectMap";
import ProjectDetailEffects from "./ProjectDetail/ProjectDetailEffects";
import {ErrorBoundary} from "react-error-boundary";
import ProjectProgress from "./ProjectDetail/ProjectProgress";
import AllTextWebsites from "../texts/AllTextWebsites";
import AllTextInfo from "../texts/AllTextInfo";

function ProjectContent(props) {
    const [selectedCategorie, changeSelectedCategorie] = useState(1)

    function clickCategeorie(e) {
        changeSelectedCategorie(parseInt(e.target.value))
        e.setState({ active: e.state.active})
    }

    return(
        <div>
            <div id="projectContent">
                <h3>Projektinhalt</h3>
                <Row className="pt-3 pb-3 bg-light">
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

            <div className="mb-2 mt-2">
                <h4 >Kennzahlen</h4>

                <div className="mb-2">
                    <ButtonGroup className={'d-flex'}>
                        {props.activeProjectVariant.nkv &&
                            <Button variant={selectedCategorie === 1 ? "outline-secondary active":"outline-secondary"} value="1" onClick={clickCategeorie}>Bewertung</Button>
                        }
                        <Button variant={selectedCategorie === 2 ? "outline-secondary active":"outline-secondary"} value="2" onClick={clickCategeorie}>Umwelt</Button>
                        <Button variant={selectedCategorie === 3 ? "outline-secondary active":"outline-secondary"} value="3" onClick={clickCategeorie}>Finanzen</Button>
                    </ButtonGroup>
                </div>

                {selectedCategorie===1 && props.activeProjectVariant.nkv &&
                    <ErrorBoundary fallback={
                        <Alert key={'info'} variant={'info'}>Es gab ein Fehler bei der Darstellung der Bewertungsdaten</Alert>
                    }>
                        <ProjectDetailBewertung activeProjectVariant={props.activeProjectVariant}/>
                    </ErrorBoundary>
                }
                {selectedCategorie===2 &&
                    <h4>Umwelt</h4>
                }
                {selectedCategorie===3 &&
                    <h4>Finanzen</h4>
                }
            </div>

            <div className="mb-2 mt-2">
                <h4>Hinweise</h4>
                <div className="mb-2">
                    <AllTextInfo project={props.activeProjectVariant}/>
                </div>
                <div className="mb-2">
                    <AllTextWebsites project={props.activeProjectVariant}/>
                </div>
            </div>
        </div>


    );
}

export default ProjectContent