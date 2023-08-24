//Bootstrap Imports
import Container from 'react-bootstrap/Container';

function Home(props) {

    return(
        <Container>
            <h1>Startseite</h1>
            <p>Willkommen beim Schienendashboard</p>
            {props.loggedIn &&
                <p>Du bist eingeloggt</p>
            }
            <p>Die Ergebnisse der Masterarbeit von Jonas Prade können unter <a href="https://d-b.schienengruen.de/master_scenario/1">"Masterarbeit Szenarien"</a> eingesehen werden</p>
            <p>Unter Projektdashboard können Informationen zum Verlauf sowie aktuellen Stand von Bahnprojekten entnommen werden.</p>

            <p>Hinweise zu Fehlern oder fehlenden Daten können <a target="_blank" href="https://github.com/JonasPrade/schienendashboard_reporting" rel="noreferrer">hier gemeldet werden</a></p>

            <h2>Quellen:</h2>
            <ul>
                <li>Strecken und Stationen basieren auf <a href='https://data.deutschebahn.com/organization/db-netz.html'>OpenData der DB Netz AG</a></li>
                <li><a href='https://www.deutschlandtakt.de'>Deutschlandtakt</a></li>
                <li><a href='https://bvwp-projekte.de'>bvwp-projekte.de</a></li>
            </ul>
        </Container>
    );
}

export default Home