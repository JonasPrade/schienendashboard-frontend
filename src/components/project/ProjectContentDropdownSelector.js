import {Dropdown} from "react-bootstrap";

function ProjectContentDropdownSelector(props) {

    //TODO: submitChangeProjectVariant to change to other ProjectVariante
    function submitChangeProjectVariant(e) {
        e.preventDefault();
        let projectVariantId = parseInt(e.target.dataset.index);
        let projectVariantArrayId=props.projectData.project_contents.findIndex(object => {
            return object.id===projectVariantId
        });
        props.changeActiveProjectVariant(props.projectData.project_contents[projectVariantArrayId]);
    }

    //Create an array of all projectVariants that aren't active
    const project_variants = props.projectData.project_contents.map(obj=>({...obj})); //to not manipulate the props
    let projectVariantArrayId=props.projectData.project_contents.findIndex(
        object => {
            return object.id===props.activeProjectVariant.id
        }
    );
    project_variants.splice(projectVariantArrayId,1)

    return(
        <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
                {props.activeProjectVariant.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {project_variants.map((project_content) =>
                    <Dropdown.Item key={project_content.id} data-index={project_content.id} onClick={submitChangeProjectVariant}>{project_content.name}</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )

}

export default ProjectContentDropdownSelector