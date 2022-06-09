import Badge from "react-bootstrap/Badge";

function ProjectGroupBadge(props) {

    return (
        <Badge bg='secondary' className='mx-1'>
            {props.name}
        </Badge>
    )
}


export default ProjectGroupBadge;