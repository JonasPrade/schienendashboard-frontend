import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import getBksAllHandlungsfelder from "../../services/bks/get-all-handlungsfelder";
import {Spinner} from "react-bootstrap";

function BksActionLong(props) {
    const [loadingAction, setLoadingAction] = useState(false)
    const [action, setAction] = useState(null)

    const handleClose = () => {
        props.setOverlayVisible(false);
        props.setActiveActionId(null);
    };

    useEffect(() => {
        setLoadingAction(true);
        getBksAllHandlungsfelder().then(
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
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Overlay Titel</h5>
                                <button type="button" className="close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Hier ist der neue Inhalt der Overlay-Komponente.</p>
                                {/* Hier kannst du den übergebenen Inhalt (props.children) anzeigen, falls erforderlich */}
                                {props.children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    Schließen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
        </div>
    ) : null;
}



export default BksActionLong
