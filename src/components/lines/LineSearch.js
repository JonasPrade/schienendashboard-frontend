import {Form, Button, Container} from "react-bootstrap";
import {useRef} from "react";
import getTraingroupById from "../../services/lines/line_service";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";

function LineSearch(props) {
    const lineidInputRef = useRef()
    var message = ""
    let navigate = useNavigate();

    function submitLine(e) {
        e.preventDefault();
        const traingroup_id = lineidInputRef.current.value;
        navigate(`/lines/${traingroup_id}`, { replace: true });
    }

    return(
        <Container>
            <Form onSubmit={submitLine}>
                <Form.Group className="mb-3" controlId="lineid">
                    <Form.Label>Linie ID</Form.Label>
                    <Form.Control type='text' placeholder='id traingroup' ref={lineidInputRef}/>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Suchen
                </Button>
            </Form>
        </Container>

    )
}

export default LineSearch