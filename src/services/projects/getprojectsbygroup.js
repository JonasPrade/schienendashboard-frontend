import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getProjectsByGroup(projectgroup_id) {
    return axios
        .get(
            API_URL + 'projects/group/' + projectgroup_id, { headers: authHeader() }
        )
        .then(response => {
            return response.data.projects
        });
}

export default getProjectsByGroup;