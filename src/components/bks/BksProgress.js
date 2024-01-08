import {Col, Row} from "react-bootstrap";
import BksProgressDiagram from "./BksProgressDiagram";
import BksProgressActions from "./BksProgressActions";


function BksProgress(props) {
    const translationProgressNames ={
        pruefung: "in Prüfung",
        vorbereitung: "in Vorbereitung",
        vorbereitung_changed: "in Vorbereitung (inhaltlich Verändert)",
        umsetzung: "in Umsetzung",
        umsetzung_changed: "in Umsetzung (inhaltlich Verändert)",
        unbekannt: "Unbekannt"
    }

    function sort_by_progress_review_1(all_actions){
        var progress = {}
        progress.pruefung = []
        progress.vorbereitung = []
        progress.vorbereitung_changed = []
        progress.umsetzung = []
        progress.umsetzung_changed = []
        progress.unbekannt = []

        for (var action of all_actions){
            if (action.review_1_status === "in Prüfung"){
                progress.pruefung.push(action)
            } else if (action.review_1_status === "in Vorbereitung"){
                progress.vorbereitung.push(action)
            } else if (action.review_1_status === "in Vorbereitung (inhaltlich Verändert)") {
                progress.vorbereitung_changed.push(action)
            } else if (action.review_1_status === "in Umsetzung") {
                progress.umsetzung.push(action)
            } else if (action.review_1_status === "in Umsetzung (inhaltlich Verändert)") {
                progress.umsetzung_changed.push(action)
            } else if (action.review_1_status === null) {
                progress.unbekannt.push(action)
            } else {
                console.log("Error: Progress not found for action: " + action.name + " with progress: " + action.review_1_status + " with id" + action.id)
            }
        }

        return progress
    }

    const progress = sort_by_progress_review_1(props.all_actions)

    return(
        <div className="mt-5">
            <h2>Fortschritt</h2>
            {props.all_actions.length > 0 &&
                <div>
                    <Row className="mt-3">
                        <Col>
                            <h3>Übersicht Umsetzung Projekte</h3>
                            <BksProgressDiagram progress={progress} translationProgressNames={translationProgressNames}/>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <h3>Details zur Umsetzung der Projekte</h3>
                            <BksProgressActions progress={progress} translationProgressNames={translationProgressNames} setActiveActionId={props.setActiveActionId}/>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    )
}

export default BksProgress