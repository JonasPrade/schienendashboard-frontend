import {Modal} from "react-bootstrap";
import React from "react";


function PopupField({content, show, setShow, header}) {
    return(
        <Modal show={show} backdrop="true" className="rounded" size="xl">
            <Modal.Header className="bg-light">
                <Modal.Title>{header}</Modal.Title>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
            </Modal.Header>
            <Modal.Body className="bg-background">
                {content}
            </Modal.Body>
            <Modal.Footer className="bg-light">
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                    Schließen
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default PopupField;
