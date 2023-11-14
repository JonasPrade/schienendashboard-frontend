import {Col, Row} from "react-bootstrap";

function BksOverview(props){
    var count_handlungsfelder = 0;
    var count_clusters = 0;
    var count_actions = 0;

    if (props.data != null) {
        count_handlungsfelder = props.data.length
        for (var handlungsfeld of props.data) {
            count_clusters += handlungsfeld.cluster.length
            for (var cluster of handlungsfeld.cluster) {
                count_actions += cluster.bks_action.length
            }
        }
    }


    return(
        <div className="bg-light p-2 mt-3 border border-primary">
            <h2>Übersicht</h2>
            <Row>
                <Col xl={6} m={12}>
                    <div>
                        <ul>
                            <li>{count_handlungsfelder} Handlungsfelder</li>
                            <li>{count_clusters} Cluster</li>
                            <li>{count_actions} Maßnahmen</li>
                        </ul>
                    </div>

                </Col>
                <Col xl={6} m={12}>
                    <div>
                        <ul>
                            <li><a href="https://bmdv.bund.de/SharedDocs/DE/Anlage/K/abschlussbericht-beschleunigungskommission-schiene.pdf?__blob=publicationFile" target="_blank">Abschluss Bericht Beschleunigungskommission Schiene</a></li>
                            <li><a href="https://bmdv.bund.de/SharedDocs/DE/Anlage/K/presse/fortschrittsbericht-bks.pdf?__blob=publicationFile" target="_blank">1. Fortschrittsbericht</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <div>
                    <span>Platzhalter Diagramm</span>
                </div>
            </Row>
        </div>
    )
}

export default BksOverview;

