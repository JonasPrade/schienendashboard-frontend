import {Form, Button, Container} from "react-bootstrap";
import {useRef} from "react";
import { useNavigate } from "react-router-dom";

function MasterAreaSearch(props) {
    const masterareaidInputRef = useRef()
    var message = ""
    let navigate = useNavigate();

    function submitMasterArea(e) {
        e.preventDefault();
        const masterarea_id = masterareaidInputRef.current.value;
        navigate(`/master_area/${masterarea_id}`, { replace: true });
    }

    return(
        <Container>
            <Form onSubmit={submitMasterArea}>
                <Form.Group className="mb-3" controlId="masterareaid">
                    <Form.Label>ID Master Area</Form.Label>
                    <Form.Control type='text' placeholder='id master area' ref={masterareaidInputRef}/>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Suchen
                </Button>
            </Form>
        </Container>

    )
}

export default MasterAreaSearch