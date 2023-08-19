import { Popup } from "react-leaflet";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

function ProjectPopup(props) {
    return (
        <Popup closeButton={false}>
            <Link to={`/project/${props.projectId}`}>
                <Button variant='outline-info'>
                    {props.projectName}
                </Button>
            </Link>
        </Popup>
    );
}

export default ProjectPopup;
