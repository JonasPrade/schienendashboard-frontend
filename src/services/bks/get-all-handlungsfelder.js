import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getBksAllHandlungsfelder() {
    return axios
        .get(
            API_URL + 'bkshandlungsfeld-all', {headers: authHeader()}
        )
        .then(response => {
            return response.data["bks_handlungsfelder"]
        })
}

export default getBksAllHandlungsfelder