import Container from "react-bootstrap/Container";
import {Spinner} from "react-bootstrap";


function Loading(props) {
    return (
        <Container>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default Loading;