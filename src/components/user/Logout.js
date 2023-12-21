import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";


function Logout(props) {
    //TODO Implement the possibility to add a message so Logout can justify why it gets triggered.
    let navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        props.changeUser(false)
        navigate('/login', { replace: true });
    }

    function home(e) {
        e.preventDefault();
        props.changeUser(false)
        navigate('/', { replace: true });
    }


    localStorage.removeItem('user');
    // clear the user, so that at reload it will get set on false.
    // if we set it here directly to false, we get problems with the hooks and the update of the states.

    return(
        <Container>
            <div>
                Du wurdest ausgeloggt
            </div>
            <div className="mt-3">
                <Button onClick={login}>
                    Login
                </Button>
            </div>
            <div className="mt-3">
                <Button onClick={home}>
                    Home
                </Button>
            </div>
        </Container>
    )
}

export default Logout