import axios from "axios";
import authHeader from "./auth-header";
const API_URL = process.env.REACT_APP_API_URL
//const API_URL = 'http://127.0.0.1:5000/';

function getProjectContent(id) {
    return axios
        .get(
            API_URL + 'project/' + id, { headers: authHeader() }
        )
        .then(response => {
            return response.data.project
        });
}

export default getProjectContent;