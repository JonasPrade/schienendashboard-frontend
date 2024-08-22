import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {Modal, Spinner} from "react-bootstrap";
import get_action from "../../services/bks/get_action";

function BksActionLong(props) {
    const [loadingAction, setLoadingAction] = useState(true)
    const [action, setAction] = useState(null)

    const handleClose = () => {
        props.setOverlayVisible(false);
        props.setActiveActionId(null);
    };

    useEffect(() => {
        setLoadingAction(true);
        get_action(props.activeActionId).then(
            (response) => {
                setAction(response);
                setLoadingAction(false);
            }
        )
    },[])

    return props.overlayVisible ? (
        <div>
            {loadingAction ? (
                <div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status" variant="primary">
                    </Spinner>
                </div>
            ):(
                <Modal className="d-block" show={props.overlayVisible} tabIndex="-1" role="dialog" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{action.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Bericht Beschleunigungskommission Schiene</h4>
                        <h5>Aktuelle Umsetzung:</h5>
                        <p>{action.review_1_status}</p>
                        <h5>Inhalt</h5>
                        {/*TODO: Show report text in Markdown*/}
                        <p>{action.report_text}</p>
                        <h5>Umsetzung</h5>
                        <p>{action.report_process}</p>
                        <h4>1. Fortschrittsbericht</h4>
                        <h5>Startpunkt</h5>
                        <p>{action.review_1_start}</p>
                        <h5>Zurückgelegte Strecke</h5>
                        <p>{action.review_1_done}</p>
                        <h5>Nächster Halt</h5>
                        <p>{action.review_1_next}</p>
                        <h5>Umsetzungsstand bei erstem Fortschrittsbericht</h5>
                        <p>{action.review_1_status}</p>
                        <h4>2. Fortschrittsbericht</h4>
                        <h5>Startpunkt</h5>
                        <p>{action.review_2_start}</p>
                        <h5>Zurückgelegte Strecke</h5>
                        <p>{action.review_2_done}</p>
                        <h5>Nächster Halt</h5>
                        <p>{action.review_2_next}</p>
                        <h5>Umsetzungsstand bei zweitem Fortschrittsbericht</h5>
                        <p>{action.review_2_status}</p>
                        {action.review_2_changed_aim &&
                            <div>
                                <h5>Änderung bei zweitem Fortschrittsbericht</h5>
                                <p>{action.review_2_changed_aim}</p>
                            </div>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {/*TODO: Buttons Cluster und Handlungsfeld aktivieren*/}
                        <Button variant="outline-primary" disabled>
                            Handlungsfeld {action.cluster.handlungsfeld_id}
                        </Button>
                        <Button variant="outline-primary" disabled>
                            Cluster {action.cluster.number} {action.cluster.name}
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            Schließen
                        </Button>
                    </Modal.Footer>
                </Modal>
                )}
        </div>
    ) : null;
}



export default BksActionLong
