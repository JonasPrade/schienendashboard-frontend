import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useEffect, useRef, useState} from "react";
import getProjectsBySearchString from "../../../services/projects/getprojectbysearchstring";
import useLocalStorage from "../../../services/LocalStorageHook.service";

function ProjectsSearchByString(props) {
    const forminputRef = useRef()

    function getSearchString(e) {
        props.setIsLoading(true);
        e.preventDefault();
        searchProjects(forminputRef.current.value)
    }

    function getAllProjects() {
        props.setIsLoading(true);
        let searchString = '';
        searchProjects(searchString);
    }

    function searchProjects(searchString) {
        const fetchProjects = async() => {
            if (searchString === '') {
                searchString = 'all'
            }

            try {
                const projects_received = await getProjectsBySearchString(searchString, props.selectedGroupIds);
                props.setProjects(projects_received);
            } catch (error) {
                console.error("Fehler beim Abrufen der Projekte:", error);
            }

        };
        fetchProjects();
        props.setIsLoading(false);
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
                <Button type='submit' variant='primary'>
                    Suchen
                </Button>
            </Form>
            <Button type='button' variant='primary' onClick={getAllProjects} className="mt-2">
                Alle anzeigen
            </Button>
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
