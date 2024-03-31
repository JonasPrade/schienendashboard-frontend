import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {searchFinve} from "../../services/finve/finve.service";
import {Col, Row} from "react-bootstrap";
import FinveList from "./FinveList";
import Loading from "../layout/Loading";
import PopupField from "../layout/PopupField";
import FinveItemLong from "./FinveItemLong";
import { useLocation } from 'react-router-dom';


function Finve() {
    const [loadingFinve, setLoadingFinves] = useState(false);
    const [finves, setFinves] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFinveId, setActiveFinveId] = useState(null)
    const [showFinveLong, setShowFinveLong] = useState(false)
    const location = useLocation();

    useEffect(() => {
        setLoadingFinves(true)
        searchFinve(searchTerm)
            .then(response => {
                setFinves(response.finve)
            })
            .catch(error => {
                console.error("Fehler beim Abrufen der Finanzierungsvereinbarungen:", error)
            })
            .finally(() => {
                setLoadingFinves(false)
            })
    }, [searchTerm])

    const queryParams = new URLSearchParams(location.search);
    const finveid = queryParams.get('finveid');

    useEffect(() => {
        if (finveid !== null) {
            setActiveFinveId(finveid)
            setShowFinveLong(true)
        }
    }, [])

    function onSubmit(event) {
        event.preventDefault()
        setSearchTerm(event.target.searchstring.value)
    }

    return(
        <div>
            <Row>
                <Col xs={4}>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label><h4>Finanzierungsvereinbarungen suchen</h4></Form.Label>
                            <Form.Control id='searchstring' type='text' placeholder='Nach Finanzierungsvereinbarungen suchen'/>
                        </Form.Group>
                        <Button type='submit' variant='primary' disabled={loadingFinve}>Suchen</Button>
                    </Form>
                </Col>
                <Col className="ms-1">
                    {loadingFinve ? <Loading/> : <FinveList finves={finves} setActiveFinveId={setActiveFinveId} setShowFinveLong={setShowFinveLong}/>}
                </Col>
            </Row>
            <div>
                {showFinveLong &&
                    <PopupField header={`Übersicht Finanzierungsvereinbarung`} show={showFinveLong} setShow={setShowFinveLong}
                        content={
                            <FinveItemLong finve_id={activeFinveId}/>
                        }
                    />
                }
            </div>
        </div>
    )
}

export default Finve