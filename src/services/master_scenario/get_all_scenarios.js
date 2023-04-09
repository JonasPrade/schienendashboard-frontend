import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getAllMasterScenarios() {
    return axios
        .get(
            API_URL + 'masterscenarios', {headers: authHeader()}
        )
        .then(response => {
            return response.data.master_scenario
        })
}

export default getAllMasterScenarios