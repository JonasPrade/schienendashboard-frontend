import {Container} from "react-bootstrap";

function Footer(props) {
    return(
            <Container className="mt-3 pb-1 text-muted fixed-bottom bg-background" >
                <a href="https://jonas-prade.de/" className="text-muted">Impressum und Kontakt</a>
            </Container>
    )
}

export default Footer;