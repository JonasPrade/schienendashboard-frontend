import Badge from "react-bootstrap/Badge";
import TooltipWrapper from "../layout/TooltipWrapper";

function ProjectGroupBadge(props) {

    return (
        <Badge bg='primary' className='mx-1'>
            <TooltipWrapper tooltipContent={props.name}>
                <span title={props.name}>{props.short_name}</span>
            </TooltipWrapper>
        </Badge>
    )
}


export default ProjectGroupBadge;