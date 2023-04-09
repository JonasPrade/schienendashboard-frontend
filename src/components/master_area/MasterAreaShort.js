import {Button, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function MasterAreaShort(props) {
    let navigate = useNavigate();

    function openMasterArea(e) {
        e.preventDefault();
        props.setMasterArea(props.area)
        navigate(`/master_area/${props.area.id}`);
    }

    return (
        <div key={props.area.id} className="square border bg-light rounded p-3 m-1">
            <h6>Untersuchungsgebiet {props.area.id}</h6>
            <Row>
                <p>Traktion: {props.area.traction_minimal_cost}</p>
            </Row>
            <Row className="pb-1">
                <Col>SGV: {props.area.sgv.toString()}</Col>
                <Col>SPNV: {props.area.spnv.toString()}</Col>
                <Col>SPFV: {props.area.spfv.toString()}</Col>
            </Row>
            <Row>
                <Link to={'/master_area/'+props.area.id}>
                    <div className="d-grid">
                        <Button variant="primary" onClick={openMasterArea}>
                            Details
                        </Button>
                    </div>
                </Link>
            </Row>
        </div>
    )
}

export default MasterAreaShort
