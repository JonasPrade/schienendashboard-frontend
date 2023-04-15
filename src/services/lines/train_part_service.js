import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getTrainPartById(trainpart_id) {
    return axios
        .get(
            API_URL + 'trainpart/'+trainpart_id, {headers: authHeader()}
        )
        .then(response => {
            return response.data.trainpart
        })
}

export default getTrainPartById