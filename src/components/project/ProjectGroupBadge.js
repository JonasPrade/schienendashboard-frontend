import Badge from "react-bootstrap/Badge";

function ProjectGroupBadge(props) {

    return (
        <Badge bg='primary' className='mx-1'>
            {props.name}
        </Badge>
    )
}


export default ProjectGroupBadge;