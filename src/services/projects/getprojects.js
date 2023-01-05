import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getProjects() {
    return axios
        .get(
            API_URL + 'projects', { headers: authHeader() }
        )
        .then(response => {
            return response.data.projects
        });
}

export default getProjects;