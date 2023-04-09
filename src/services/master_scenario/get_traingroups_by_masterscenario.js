import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getTraingroupByMasterScenario(master_scenario_id) {
    return axios
        .get(
            API_URL + 'traingroups-scenario/'+master_scenario_id, {headers: authHeader()}
        )
        .then(response => {
            return response.data.master_area
        })
}

export default getTraingroupByMasterScenario