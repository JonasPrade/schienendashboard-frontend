import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

/*
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
*/

function Login(props) {
    const [loadingLoginData, changeLoadingLoginData] = useState(false)
    let navigate = useNavigate();

    //Change status of useState of App loggedIn(true)
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    // var status = "";
    var message = "";

    function submitLoginHandler(e) {
        changeLoadingLoginData(true)
        e.preventDefault();

        // TODO: Reimplement validate
        //this.form.validateAll();

        //if (this.checkBtn.context._errors.length === 0) {
            /*
            const user_data = AuthService.login(this.state.username, this.state.password)
            console.log(user_data)
            */

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        AuthService.login(enteredUsername, enteredPassword).then(
            (response) => {
                console.log('logged in');
                changeLoadingLoginData(false);
                props.changeUser(response)
                navigate('/', { replace: true });
            },
            error => {
                message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    }

    return (
        <Container>
            <Form onSubmit={submitLoginHandler}>
                <Form.Group className="mb-3" controlId='username'>
                    <Form.Label>Benutzername</Form.Label>
                    <Form.Control type='text' placeholder='Benutzername' ref={usernameInputRef}/>
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Passwort</Form.Label>
                    <Form.Control type='password' placeholder='Passwort' ref={passwordInputRef}/>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Einloggen
                </Button>
            </Form>
        </Container>
    );

}

export default Login;

/*
<form onSubmit={submitLoginHandler}>
    <div>
        <label htmlFor='username'>Benutzername</label>
        <input type='text' required id='username' ref={usernameInputRef}/>
    </div>
    <div>
        <label htmlFor='password'>Passwort</label>
        <input type='password' required id='password' ref={passwordInputRef}/>
    </div>
    <div>
        <button>Login</button>
    </div>
</form>
 */