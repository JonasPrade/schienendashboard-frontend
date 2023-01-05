import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getTraingroupById(traingroup_id) {
    return axios
        .get(
            API_URL + 'traingroup/'+traingroup_id, {headers: authHeader()}
        )
        .then(response => {
            return response.data.traingroup
        })
}

export default getTraingroupById