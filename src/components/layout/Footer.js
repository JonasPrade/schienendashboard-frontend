import {Container} from "react-bootstrap";

function Footer() {
    return(
            <Container className="mt-4 pb-1 text-muted fixed-bottom bg-background" >
                <a href="https://jonas-prade.de/" className="text-muted">Impressum und Kontakt</a>
                <span> | </span>
                <a target="_blank" href="https://github.com/JonasPrade/schienendashboard_reporting" rel="noreferrer" className="text-muted">Fehler melden</a>
                <span> | </span>
                <span>Es werden keine Cookies genutzt</span>
            </Container>
    )
}

export default Footer;