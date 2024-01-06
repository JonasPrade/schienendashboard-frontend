import {Button, Col, Row, Spinner} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useEffect, useRef, useState} from "react";
import getProjectsBySearchString from "../../../services/projects/getprojectbysearchstring";
import ProjectList from "../ProjectList";

function ProjectsSearchByString(props) {
    const forminputRef = useRef()
    const [projects, SetProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function extractIds(projectGroups) {
        return projectGroups.map(group => group.id);
    }

    function getSearchString(e) {
        e.preventDefault();
        searchProjects(forminputRef.current.value)
    }

    function searchProjects(searchString) {
        const fetchProjects = async() => {
            setIsLoading(true);
            if (searchString === null) {
                setIsLoading(false);
                return;
            }
            try {
                const projects = await getProjectsBySearchString(searchString, extractIds(props.projectGroups));
                SetProjects(projects);
            } catch (error) {
                console.error("Fehler beim Abrufen der Projekte:", error);
            }
            setIsLoading(false);
        };
        fetchProjects()
    }


    return(
        <div>
            <Row>
                <Form onSubmit={getSearchString}>
                    <Form.Group className="mb-3" controlId="projectid">
                        <Form.Label><h3>Projekte suchen</h3></Form.Label>
                        <Form.Control type='text' placeholder='Nach Projekten suchen' ref={forminputRef}/>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Suchen
                    </Button>
                </Form>
            </Row>
            <Row className="mt-3">
                {isLoading ? (
                    <div className="d-flex justify-content-center mt-5">
                        <Spinner animation="border" role="status" variant="primary">
                        </Spinner>
                    </div>
                ) : (
                    projects.length === 0 ? (
                        <div className="d-flex justify-content-center mt-5">
                            <p>Keine Projekte gesucht oder gefunden</p>
                        </div>
                    ) : (
                        <ProjectList projectscontent={projects}/>
                    )
                )}
            </Row>
        </div>
    )
}

export default ProjectsSearchByString
