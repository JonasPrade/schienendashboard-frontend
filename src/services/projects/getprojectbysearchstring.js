import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

function getProjectsBySearchString(searchString, projectgroup_ids) {
    function generateQueryString(ids) {
        if (!Array.isArray(ids) || ids.length === 0) {
            return '';
        }

        const queryString = ids.map(id => `projectgroup_id=${id}`).join('&');
        return `?${queryString}`;
    }

    const query_string_project_groups = generateQueryString(projectgroup_ids)

    return axios
        .get(
            API_URL + 'search/projectcontent/' + searchString + query_string_project_groups, { headers: authHeader() }
        )
        .then(response => {
            return response.data.projects
        });
}


export default getProjectsBySearchString;