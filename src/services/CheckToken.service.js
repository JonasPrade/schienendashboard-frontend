import axios from "axios";

function checkValidToken(props) {
    const token = props.user.auth_token
    const API_URL = process.env.REACT_APP_API_URL;
    var valid = false
    var message = ''
    var answ = {valid, message}

    function tokeninvalid() {
        valid = false
        message = 'Fehler. Bitte wieder erneut einloggen'
        return {valid, message}
    }

    function tokenvalid() {
        message = 'success'
        valid = true
        return {valid, message}
    }

    /*
    if (!token){
        answ = tokeninvalid()
        return answ
    }

     */


    return axios
        .post(API_URL + "auth/checktoken", {
            token
        })
        .then(response => {
            if (response.data.status === 'success') {
                answ = tokenvalid()
                return answ
            } else {
                answ = tokeninvalid()
                return answ
            }

        })
        .catch((error) => {
            answ = tokeninvalid()
            return answ
        })

}

export default checkValidToken;