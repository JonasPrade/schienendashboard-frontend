import {Col, Row} from "react-bootstrap";
import BksProgressDiagram from "./BksProgressDiagram";
import BksProgress from "./BksProgress";

function BksOverview(props){

    function get_counts(bks_data) {
        var count_handlungsfelder = 0;
        var count_clusters = 0;
        var count_actions = 0;
        if (bks_data != null) {
            count_handlungsfelder = bks_data.length
            for (var handlungsfeld of bks_data) {
                count_clusters += handlungsfeld.cluster.length
                for (var cluster of handlungsfeld.cluster) {
                    count_actions += cluster.bks_action.length
                }
            }
        }
        return [count_handlungsfelder, count_clusters, count_actions]
    }



    const [count_handlungsfelder, count_clusters, count_actions] = get_counts(props.data)



    return(
        <div className="bg-light p-3 mt-3 border border-primary rounded">
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
                        <h5>Dokumente</h5>
                        <ul>
                            <li><a href="https://bmdv.bund.de/SharedDocs/DE/Anlage/K/abschlussbericht-beschleunigungskommission-schiene.pdf?__blob=publicationFile" target="_blank">Abschluss Bericht Beschleunigungskommission Schiene</a></li>
                            <li><a href="https://bmdv.bund.de/SharedDocs/DE/Anlage/K/presse/fortschrittsbericht-bks.pdf?__blob=publicationFile" target="_blank">1. Fortschrittsbericht</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BksOverview;

