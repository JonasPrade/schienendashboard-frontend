import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getMainMasterAreaForScenario(master_scenario_id) {
    return axios
        .get(
            API_URL + 'main_masterareas_for_scenario/'+master_scenario_id, {headers: authHeader()}
        )
        .then(response => {
            return response.data.master_areas
        })
}

export default getMainMasterAreaForScenario