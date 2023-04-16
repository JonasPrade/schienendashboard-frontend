import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getTrainCostForTraingroupAndScenario(scenario_id, traingroup_id) {
    return axios
        .get(
            API_URL + 'traingroupcostscenario/'+scenario_id+'/'+traingroup_id, {headers: authHeader()}
        )
        .then(response => {
            return response.data.train_cost
        })
}

export default getTrainCostForTraingroupAndScenario