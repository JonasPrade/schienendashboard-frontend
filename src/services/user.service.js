import axios from "axios";
import authHeader from "./auth-header";
const API_URL = process.env.REACT_APP_API_URL;

class UserService{
    getProjects() {
        return axios.get(API_URL + 'projects');
    }

    getProjectContent(id) {
        return axios
            .get(
                API_URL + 'project/' + id, { headers: authHeader() }
            )
            .then(response => {
                return response.data
            });
    }

}

export default UserService;