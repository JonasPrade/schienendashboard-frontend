import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

function TextWebsite(props) {

    return(
        <Card className="bg-light border-website border-3 mt-3">
            <Card.Body>
                <Card.Title>🌐 {props.text.header}</Card.Title>
                <Card.Text>{props.text.text}</Card.Text>
                {props.text.logo_url &&
                    <Card.Img className="p-3 mb-3" variant="top" src={props.text.logo_url}/>
                }
                <Card.Link href={props.text.weblink} target="_blank"><Button>Link zur Website</Button></Card.Link>
            </Card.Body>
        </Card>
    )
}

export default TextWebsite
