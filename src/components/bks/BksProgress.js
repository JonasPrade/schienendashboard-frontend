import { Col, Row } from "react-bootstrap";
import BksProgressDiagram from "./BksProgressDiagram";
import BksProgressActions from "./BksProgressActions";

const translationProgressNames = {
    pruefung: "in Prüfung",
    vorbereitung: "in Vorbereitung",
    vorbereitung_changed: "in Vorbereitung (inhaltlich verändert)",
    umsetzung: "in Umsetzung",
    umsetzung_changed: "in Umsetzung (inhaltlich verändert)",
    unbekannt: "Unbekannt",
    nicht_umgesetzt: "wird aktuell nicht umgesetzt",
    fertig: "vollständig umgesetzt",
    fertig_changed: "vollständig umgesetzt (inhaltlich verändert)"
};

function BksProgress({ all_actions, setActiveActionId }) {
    const sortByProgressReview2 = (actions) => {
        const progress = Object.keys(translationProgressNames).reduce((acc, key) => ({ ...acc, [key]: [] }), {});

        actions.forEach(action => {
            const status = action.review_2_status;
            const key = Object.keys(translationProgressNames).find(k => translationProgressNames[k] === status) || 'unbekannt';
            progress[key].push(action);
        });

        return progress;
    };

    const progress = sortByProgressReview2(all_actions);

    return (
        <div className="mt-5">
            <h2>Fortschritt</h2>
            {all_actions.length > 0 && (
                <>
                    <Row className="mt-3">
                        <Col>
                            <h3>Übersicht Umsetzung Projekte</h3>
                            <BksProgressDiagram progress={progress} translationProgressNames={translationProgressNames} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Details zur Umsetzung der Projekte</h3>
                            <BksProgressActions
                                progress={progress}
                                translationProgressNames={translationProgressNames}
                                setActiveActionId={setActiveActionId}
                            />
                        </Col>
                    </Row>
                </>
            )}
        </div>
    );
}

export default BksProgress;