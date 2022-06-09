import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "auth/login", {
                username,
                password
            })
            .then(response => {
                if (response.data.auth_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    register(username, email, password) {
        return axios.post(API_URL + "auth/register", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();