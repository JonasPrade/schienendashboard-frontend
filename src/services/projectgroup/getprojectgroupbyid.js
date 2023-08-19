// getProjectGroupsById.js
import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL;

function getProjectGroupsById(ProjectGroupIds) {
    const list_projectgroups = ProjectGroupIds.map(id => `id=${id}`).join('&');

    return axios
        .get(
            API_URL + 'projectgroupsbyid?' + list_projectgroups, { headers: authHeader() }
        )
        .then(response => {
            return response.data.projectgroups;
        });
}

export default getProjectGroupsById;
