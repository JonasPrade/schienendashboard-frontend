import Container from "react-bootstrap/Container";
import BksOverview from "../bks/BksOverview";
import {useEffect, useState} from "react";
import getBksAllHandlungsfelder from "../../services/bks/get-all-handlungsfelder";
import {Spinner} from "react-bootstrap";

function Bks() {
    const [loadingBks, setLoadingBks] = useState(false)
    const [bksData, setBksData] = useState(null)

    useEffect(() => {
        setLoadingBks(true);
        getBksAllHandlungsfelder().then(
            (response) => {
                setBksData(response);
                setLoadingBks(false);
            }
        )
    },[])

  return (
    <Container className="mt-3">
        <h1>Beschleunigungskommission Schiene</h1>
        {loadingBks && bksData != null
        ? (
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" role="status" variant="primary">
                </Spinner>
            </div>
            ):(
        <div>
            <BksOverview data={bksData}/>
        </div>)}
    </Container>
  );
}

export default Bks;
