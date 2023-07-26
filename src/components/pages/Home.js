import {Link} from "react-router-dom";

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Home(props) {

    return(
        <Container>
            <h1>Startseite</h1>
            <p>Willkommen beim Schienendashboard</p>
            {props.loggedIn &&
                <p>Du bist eingeloggt</p>
            }
            <p>Die Ergebnisse der Masterarbeit von Jonas Prade können unter <a href="http://localhost:3000/master_scenario/1">"Masterarbeit Szenarien"</a> eingesehen werden</p>
            <p>Der Rest der Website ist noch in Arbeit. Ziel ist eine Übersicht über die verschiedenen Schienenprojekte, Infrastrukturzustand und weitere Themen.</p>

            <h2>Bekannte Fehler/Ungenauigkeiten Projektdashboard</h2>

            <dl>
                <dt>Stuttgart – Nürnberg</dt>
                    <dd>- Trennung zwischen BVWP-Projekt und BSWAG 2023, da BSWAG 2023 ohne Neigetechnik</dd>
                <dt>Umsetzungsstand 740m Projekte</dt>
                <dt>Fehmarnbeltquerung</dt>
                    <dd>- Tunnel als Projektabschnitt hinzufügen</dd>
                    <dd>- Fehmarnsundquerung als Projektabschnitt hinzufügen</dd>
                <dt>FinVe Fulda Runde 2023 einarbeiten</dt>
                <dt>Hof – Leipzig/Dresden</dt>
                    <dd>- Dresden Hbf – Freital Ost Lp 3/4</dd>
                    <dd>- Subprojekte hinzufügen</dd>
                <dt>Knoten Mannheim</dt>
                    <dd>- Standort Projekt Synchronitätsgleise Ludwigshafen</dd>
                <dt>VDE 9 Leipzig – Dresden</dt>
                    <dd>- Teilmaßnahmen hinzufügen</dd>
                    <dd>- Kottewitz – Weinböhla LP 3/4</dd>
                <dt>ABS Karlsruhe – Basel</dt>
                    <dd>- Planfeststellungsabschnitte mit BVWP-Abschnitten synchronisieren</dd>
                    <dd>- Fortführung der NBS um Freiburg fehlt in Karte</dd>
                <dt>Oberhausen – Emmerich</dt>
                    <dd>- Planfeststellungsabschnitte hinzufügen</dd>
                <dt>Links zu Projektwebsites für alle Projekte</dt>
                <dt>Links zu BVWP für alle Projekte wo möglich</dt>
                <dt>Planungsstand für alle Projekte wo möglich</dt>
            </dl>

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