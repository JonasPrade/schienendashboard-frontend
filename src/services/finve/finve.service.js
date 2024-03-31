import axios from "axios";
import authHeader from "../auth-header";
const API_URL = process.env.REACT_APP_API_URL

export function searchFinve(searchTerm) {
    if (searchTerm==='') {
        searchTerm = 'all'
    }
    return axios
        .get(
            API_URL + 'search/finve/' + searchTerm, {headers: authHeader()}
        )
        .then(response => {
            return response.data
        })
}

export function getFinve(id) {
    return axios
        .get(
            API_URL + 'finve/' + id, {headers: authHeader()}
        )
        .then(response => {
            return response.data
        })
}
