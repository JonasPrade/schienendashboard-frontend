import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getMasterAreaById(master_area_id) {
    return axios
        .get(
            API_URL + 'masterarea/'+master_area_id, {headers: authHeader()}
        )
        .then(response => {
            return response.data.master_area
        })
}

export default getMasterAreaById