import {Button, Col, Row, Spinner} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useEffect, useRef, useState} from "react";
import getProjectsBySearchString from "../../../services/projects/getprojectbysearchstring";

function ProjectsSearchByString(props) {
    const forminputRef = useRef()
    const [loading, setLoading] = useState(false)

    function getSearchString(e) {
        e.preventDefault();
        searchProjects(forminputRef.current.value)
    }

    function getAllProjects() {
        let searchString = '';
        searchProjects(searchString);
        forminputRef.current.value = '';
    }

    function searchProjects(searchString) {
        const fetchProjects = async() => {
            setLoading(true)
            if (searchString === '') {
                searchString = 'all'
            }

            try {
                const projects_received = await getProjectsBySearchString(searchString, props.selectedGroupIds);
                props.setProjects(projects_received);
            } catch (error) {
                console.error("Fehler beim Abrufen der Projekte:", error);
            } finally {
                setLoading(false)
            }

        };
        fetchProjects();
    }

    useEffect(() => {
        getAllProjects(); 
    }, []);

    const changeShowSubprojects = (event) => {
        const {name, checked} = event.target;
        props.setShowSubprojects(checked)
    }

    return(
        <div>
            <Form onSubmit={getSearchString}>
                <Form.Group className="mb-3" controlId="projectid">
                    <Form.Label><h3>Projekte suchen</h3></Form.Label>
                    <Form.Control type='text' placeholder='Nach Projekten suchen' ref={forminputRef}/>
                </Form.Group>
                <Button type='submit' variant='primary' disabled={loading}>
                    Suchen
                </Button>
            </Form>
            <Row>
                <Col>
                    <Button type='button' variant='primary' onClick={getAllProjects} className="mt-2" disabled={loading}>
                        Alle anzeigen
                    </Button>
                </Col>
                <Col>
                    {
                        loading &&
                        <div className="d-flex justify-content-start">
                            <Spinner animation="border" role="status" variant="primary">
                            </Spinner>
                        </div>
                    }
                </Col>
            </Row>

            <Form className="mt-2">
                <Form.Check
                    type="checkbox"
                    name="show subprojects"
                    label="Zeige Unterprojekte (in Liste)"
                    checked={props.showSubprojects || false}
                    onChange={changeShowSubprojects}
                />
            </Form>
        </div>
    )
}

export default ProjectsSearchByString
