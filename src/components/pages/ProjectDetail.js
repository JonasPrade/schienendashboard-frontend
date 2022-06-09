import {useEffect, useState} from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";

import ProjectItemLong from "../project/ProjectItemLong";
import checkValidToken from "../../services/CheckToken.service";
import Container from "react-bootstrap/Container";

function ProjectDetail(props) {
    const project_id = props.activeProject;
    const [isLoading, setIsLoading] = useState(true);
    const [projectData, setProjectData] = useState([])
    const API_URL = process.env.REACT_APP_API_URL
    const url = API_URL + 'project/' + project_id.toString();
    const header = authHeader();

    useEffect(() => {
        setIsLoading(true);
        checkValidToken(props);
        axios.get(url, { headers: header }).then(response => {
            const projectData = response.data.project
            setIsLoading(false);
            setProjectData({projectData})
        })
    }, []);

    if (isLoading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        );
    }

      return(
        <Container>
            <ProjectItemLong projectData={projectData}/>
        </Container>
    );
}

export default ProjectDetail;