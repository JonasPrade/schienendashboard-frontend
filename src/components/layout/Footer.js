import {Container} from "react-bootstrap";

function Footer() {
    return(
            <Container className="mt-3 pb-1 text-muted fixed-bottom bg-background" >
                <a href="https://jonas-prade.de/" className="text-muted">Impressum und Kontakt</a>
                <span> | </span>
                <a target="_blank" href="https://github.com/JonasPrade/schienendashboard_reporting" rel="noreferrer" className="text-muted">Fehler melden</a>
            </Container>
    )
}

export default Footer;