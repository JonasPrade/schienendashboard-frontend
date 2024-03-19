import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

export function getProjectsBySearchString(searchString, projectgroup_ids) {
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

// export function searchProjects(searchString, setLoading, setProjects) {
//     const fetchProjects = async() => {
//         setLoading(true)
//         if (searchString === '') {
//             searchString = 'all'
//         }
//
//         try {
//             const projects_received = await getProjectsBySearchString(searchString, props.selectedGroupIds);
//             setProjects(projects_received);
//         } catch (error) {
//             console.error("Fehler beim Abrufen der Projekte:", error);
//         } finally {
//             setLoading(false)
//         }
//
//     };
//     fetchProjects();
// }
//
// export function getSearchString(searchString) {
//     e.preventDefault();
//     searchProjects(forminputRef.current.value)
// }
//
// export function getAllProjects() {
//     let searchString = '';
//     searchProjects(searchString);
//     forminputRef.current.value = '';
// }