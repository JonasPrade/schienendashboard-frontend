import {Dropdown} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Loading from "../layout/Loading";
import getProjectGroups from "../../services/projects/getprojectgroups";

function ProjectGroupDropdown(props) {
    const [projectGroups, setProjectGroups] = useState(null)
    const [isLoadingProjectGroup, setIsLoadingProjectGroup] = useState(true);

    useEffect(() => {
        getProjectGroups().then(
            (response) => {
                setProjectGroups(response);
                setIsLoadingProjectGroup(false);
            }
        )
    }, [])

    function submitChangeActiveProjectGroup(e) {
        e.preventDefault();
        let projectGroupId = parseInt(e.target.dataset.index);
        let projectGroupArrayId = projectGroups.findIndex(object => {
            return object.id===projectGroupId
        })
        props.setActiveProjectGroup(projectGroups[projectGroupArrayId])  // TODO: No id complete ProjectGroup
    }

    if (isLoadingProjectGroup) {
        return(
            <Loading/>
        );
    }


    return (
      <div>
          <Dropdown>
              <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  {props.activeProjectGroup.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  {projectGroups.map((project_group) =>
                      <Dropdown.Item key={project_group.id} data-index={project_group.id} onClick={submitChangeActiveProjectGroup}>{project_group.name}</Dropdown.Item>
                  )}
              </Dropdown.Menu>
          </Dropdown>
      </div>
    );


}

export default ProjectGroupDropdown