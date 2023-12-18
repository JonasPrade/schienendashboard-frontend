import Container from "react-bootstrap/Container";
import BksOverview from "../bks/BksOverview";
import {useEffect, useState} from "react";
import getBksAllHandlungsfelder from "../../services/bks/get-all-handlungsfelder";
import {Spinner} from "react-bootstrap";
import BksProgress from "../bks/BksProgress";
import BksActionLong from "../bks/BskActionLong";

function Bks() {
    const [loadingBks, setLoadingBks] = useState(false)
    const [bksData, setBksData] = useState(null)
    const [activeActionId, setActiveActionId] = useState(null)
    const [overlayActionVisible, setOverlayActionVisible] = useState(false)


    useEffect(() => {
        setLoadingBks(true);
        getBksAllHandlungsfelder().then(
            (response) => {
                setBksData(response);
                setLoadingBks(false);
            }
        )
    },[])

    function get_all_actions(bks_data){
        var actions = []
        if (bks_data != null) {
            for (var handlungsfeld of bks_data) {
                for (var cluster of handlungsfeld.cluster) {
                    for (var action of cluster.bks_action) {
                        actions.push(action)
                    }
                }
            }
        }
        return actions
    }

    const all_actions = get_all_actions(bksData)

    useEffect(() => {
        if(activeActionId) {
            setOverlayActionVisible(true)
        } else {
            setOverlayActionVisible(false)
        }
    }, [activeActionId])

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
                <BksProgress all_actions={all_actions} setActiveActionId={setActiveActionId}/>
                {overlayActionVisible &&
                    <BksActionLong activeActionId={activeActionId} setActiveActionId={setActiveActionId} overlayVisible={overlayActionVisible} setOverlayVisible={setOverlayActionVisible}/>
                }
            </div>
        )}
    </Container>
  );
}

export default Bks;
