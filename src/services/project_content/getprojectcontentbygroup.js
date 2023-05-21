import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getProjectsContentByGroup(projectgroup_id) {
    return axios
        .get(
            API_URL + 'projectcontentsbygroup/' + projectgroup_id, { headers: authHeader() }
        )
        .then(response => {
            return response.data.pcs
        });
}

export default getProjectsContentByGroup;