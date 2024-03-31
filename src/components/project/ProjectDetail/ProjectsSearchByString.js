import {Button, Col, Row, Spinner} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useEffect} from "react";
import { getAllProjects, getSearchString} from "../../../services/projects/projectfunctions";

function ProjectsSearchByString(props) {

    useEffect(() => {
        getAllProjects(props.searchHistoryRef, props.setIsLoadingSearch, props.setProjects, props.selectedGroupIds);
    }, []);

    const changeShowSubprojects = (event) => {
        const {name, checked} = event.target;
        props.setShowSubprojects(checked)
    }

    function clickAllProjects() {
        getAllProjects(props.searchHistoryRef, props.setIsLoadingSearch, props.setProjects, props.selectedGroupIds);
    }

    function onSubmit(e) {
        getSearchString(e, props.searchHistoryRef.current.value, props.setIsLoadingSearch, props.setProjects, props.selectedGroupIds)
    }

    return(
        <div>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="projectid">
                    <Form.Label><h3>Projekte suchen</h3></Form.Label>
                    <Form.Control type='text' placeholder='Nach Projekten suchen' ref={props.searchHistoryRef}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Button type='submit' variant='primary' disabled={props.isLoadingSearch}>
                            Suchen
                        </Button>
                        <Button type='button' variant='primary' onClick={clickAllProjects} className="ms-2" disabled={props.isLoadingSearch}>
                            Alle Projekte
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Form className="mt-2">
                <Form.Check
                    type="checkbox"
                    name="show subprojects"
                    label="Zeige Unterprojekte (in Liste)"
                    checked={props.showSubprojects || false}
                    onChange={changeShowSubprojects}
                />
            </Form>
            <Row>
                <Col>
                    {
                        props.isLoadingSearch &&
                        <div className="d-flex justify-content-start">
                            <Spinner animation="border" role="status" variant="primary">
                            </Spinner>
                        </div>
                    }
                </Col>
            </Row>
            <Col>

            </Col>
        </div>
    )
}

export default ProjectsSearchByString
