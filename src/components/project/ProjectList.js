import ProjectItemShort from "./ProjectItemShort";

import Stack from 'react-bootstrap/Stack'


function ProjectList(props) {
    return(
        <Stack gap={3}>
            {props.projectslist.projects.map((project) => (
                <ProjectItemShort
                    key={project.id}
                    project={project}

                    activeProject={props.activeProject}
                    changeActiveProject={props.changeActiveProject}
                />
                )
            )}
        </Stack>
    );
}

export default ProjectList;

