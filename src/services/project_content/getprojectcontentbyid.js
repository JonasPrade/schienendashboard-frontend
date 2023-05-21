import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getProjectContentById(projectcontent_id) {
    return axios
        .get(
            API_URL + 'projectcontent/' + projectcontent_id, { headers: authHeader() }
        )
        .then(response => {
            return response.data.pc
        });
}

export default getProjectContentById;