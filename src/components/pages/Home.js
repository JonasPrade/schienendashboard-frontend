import {Link} from "react-router-dom";

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home(props) {

    return(
        <Container>
            <h1>Startseite</h1>
            <p>Willkommen beim Schienendashboard</p>
            <p>Die Ergebnisse der Masterarbeit von Jonas Prade können unter <a href="http://localhost:3000/master_scenario/1">"Masterarbeit Szenarien"</a> eingesehen werden</p>
            <p>Der Rest der Website ist noch in Arbeit. Ziel ist eine Übersicht über die verschiedenen Schienenprojekte, Infrastrukturzustand und weitere Themen.</p>
            {!props.loggedIn &&
                <div>
                    <h2>Einloggen</h2>
                    <p>Bitte logge dich ein. Die Masterarbeit kann ohne Login eingesehen werden.</p>
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