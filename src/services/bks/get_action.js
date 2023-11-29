import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getAction(action_id) {
    return axios
        .get(
            API_URL + '/bksaction/' + action_id, { headers: authHeader() }
        )
        .then(response => {
            return response.data.action
        });
}

export default getAction;