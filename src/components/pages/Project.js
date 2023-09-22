import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getProjectContentById from "../../services/project_content/getprojectcontentbyid";
import Loading from "../layout/Loading";
import ProjectSearch from "../project/ProjectSearch";
import ProjectItemLong from "../project/ProjectItemLong";
import getProjectContentShortById from "../../services/project_content/getprojectcontentshortbyid";

function Project(props) {
    let params = useParams()
    const [loadingProject, setLoadingProject] = useState(false)
    const [project, setProject] = useState(null)

    useEffect(() => {
        if (params["id"] !== undefined) {
            setLoadingProject(true);
            getProjectContentById(parseInt(params["id"])).then(
                (response) =>{
                    setProject(response);
                    setLoadingProject(false);
                }
            )
        }
    },[params]);

    if (loadingProject){
        return(
            <div>
                <Loading/>
            </div>
        )
    } else if (project == null || Object.keys(project).length === 0){
        return(
            <div>
                <ProjectSearch/>
            </div>
        )
    }

    return(
        <div>
            <ProjectSearch/>
            <ProjectItemLong project={project}/>
        </div>
    )
}

export default Project
