import axios from "axios";
import authHeader from "./auth-header";
const API_URL = process.env.REACT_APP_API_URL;



/*
class UserService{
    getProjectContent(id) {
        return axios
            .get(
                API_URL + 'project/' + id, { headers: authHeader() }
            )
            .then(response => {
                return response.data
            });
    }

    getProjectsByGroup(project_group_id) {
        return axios
            .get(
                API_URL + 'project/group/' + project_group_id, { headers: authHeader() }
            )
            .then(response => {
                return response.data
            });
    }

    getProjectGroups() {
        return axios
            .get(
                API_URL + 'projectgroups', { headers: authHeader() }
            )
            .then(response => {
                return response.data
            });
    }

}

export default UserService;
*/

export default {getProjects};
