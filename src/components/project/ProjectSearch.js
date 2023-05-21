import Container from "react-bootstrap/Container";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";


function ProjectSearch(props) {
    const projectcontentidInputRef = useRef()
    let navigate = useNavigate()

    function submitProject(e) {
        e.preventDefault();
        const projectcontent_id = projectcontentidInputRef.current.value;
        navigate(`/project/${projectcontent_id}`, {replace:true});
    }

    return(
        <Container>
            <Form onSubmit={submitProject}>
                <Form.Group className="mb-3" controlId="projectid">
                    <Form.Label>ID Project Content</Form.Label>
                    <Form.Control type='text' placeholder='id project content' ref={projectcontentidInputRef}/>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Suchen
                </Button>
            </Form>
        </Container>
    )
}

export default ProjectSearch
