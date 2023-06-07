import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL


function getTextForProjectContentAndTextType(project_id, texttype_id) {
    return axios
        .get(
            API_URL + 'textbypcandtexttype/' + project_id + '/' + texttype_id, { headers: authHeader() }
        )
        .then(response => {
            return response.data.texts
        });
}

export default getTextForProjectContentAndTextType;
