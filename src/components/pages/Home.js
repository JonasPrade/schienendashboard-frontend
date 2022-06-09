import {Link} from "react-router-dom";

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home(props) {

    return(
        <Container>
            <h1>Startseite</h1>
            <p>Willkommen bei Projekte Schiene Deutschland (Pros-D)</p>
            {!props.loggedIn &&
                <div>
                    <h2>Einloggen</h2>
                    <p>Bitte logge dich ein.</p>
                    <Link to='/login'>
                        <Button type="button">
                            Einloggen
                        </Button>
                    </Link>
                </div>
            }
            {props.loggedIn &&
                <li>
                    <Link to='/projects'>Alle Projekte</Link>
                </li>
            }
        </Container>
    );
}

export default Home