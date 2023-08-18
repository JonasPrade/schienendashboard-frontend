import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getFirstProjectGroup() {
    return axios
        .get(
            API_URL + 'projectgroup/first', { headers: authHeader() }
        )
        .then(response => {
            return response.data.projectgroup
        });
}

export default getFirstProjectGroup;