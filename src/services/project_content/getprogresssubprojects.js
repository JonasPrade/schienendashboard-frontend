import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getProgressOfSubprojects(projectcontent_id) {
    return axios
        .get(
            API_URL + '/subprojects-progress/' + projectcontent_id, { headers: authHeader() }
        )
        .then(response => {
            return response.data.progress
        });
}

export default getProgressOfSubprojects;