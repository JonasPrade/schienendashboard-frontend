import {Spinner} from "react-bootstrap";
import ProjectList from "../ProjectList";

function ProjectSearchList(props) {
    function filterProjects(projects) {
        if (props.showSubprojects === true) {
            return projects.filter(project => {
                return project.superior_project_content_id
            })
        } else {
            return projects
        }
    }

    const filtered_projects = filterProjects(props.projects)

    return(
        <div>
            {props.isLoading ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status" variant="primary">
                    </Spinner>
                </div>
            ) : (
                props.projects.length === 0 ? (
                    <div className="d-flex justify-content-center mt-5">
                        <p>Keine Projekte gesucht oder gefunden</p>
                    </div>
                ) : (
                    <ProjectList projectscontent={filtered_projects}/>
                )
            )}
        </div>
    )
}

export default ProjectSearchList

