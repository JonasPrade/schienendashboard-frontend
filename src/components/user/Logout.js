import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


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

    /*
    useEffect(() =>{
        props.changeUser(false)
    }, [])
     */

    localStorage.removeItem('user');
    // we clear the user, so that at reload it will get set on false.
    // if we set it here directly to false, we get problems with the hooks and the update of the states.

    return(
        <div>
            <div>
                Du wurdest ausgeloggt
            </div>
            <div>
                <Button onClick={login}>
                    Login
                </Button>
            </div>
            <div>
                <Button onClick={home}>
                    Home
                </Button>
            </div>
        </div>
    )
}

export default Logout