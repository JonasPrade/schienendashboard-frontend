import {Col, Row} from "react-bootstrap";

function BksOverview(props){

    return(
        <div className="bg-light p-3 mt-3 border border-primary rounded">
            <h2>Übersicht</h2>
            <Row>
                <Col xl={6} m={12}>
                    <div>
                        <h5>Dokumente</h5>
                        <ul>
                            <li><a href="https://bmdv.bund.de/SharedDocs/DE/Anlage/K/abschlussbericht-beschleunigungskommission-schiene.pdf?__blob=publicationFile" target="_blank" rel="noopener noreferrer">Abschluss Bericht Beschleunigungskommission Schiene</a></li>
                            <li><a href="https://bmdv.bund.de/SharedDocs/DE/Anlage/K/presse/fortschrittsbericht-bks.pdf?__blob=publicationFile" target="_blank" rel="noopener noreferrer">1. Fortschrittsbericht</a></li>
                            <li><a href="https://bmdv.bund.de/SharedDocs/DE/Anlage/K/2-fortschrittsbericht-bks.html" target="_blank" rel="noopener noreferrer">2. Fortschrittsbericht</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BksOverview;

