import {useState} from "react";
import DropdownMenu from "../ui/DropdownMenu";
import BksActionShort from "./BksActionShort";
import {Col, Row} from "react-bootstrap";


function BksProgressActions(props) {
    const [selectedProgress, setSelectedProgress] = useState('');

    const progressNames = Object.getOwnPropertyNames(props.progress)

    return(
        <div>
            <DropdownMenu selectedProgress={selectedProgress} setSelectedProgress={setSelectedProgress} progressNames={progressNames} translationProgressNames={props.translationProgressNames}/>
            {
                selectedProgress === '' ?
                    <div className="mt-3">
                        <p>Bitte im Menü auswählen</p>
                    </div> :
                    <Row className="mt-3">
                        {props.progress[selectedProgress].map((action)=>(
                            <Col key={action.id} sm={12} md={6} className="mb-3">
                                <BksActionShort action={action} setActiveActionId={props.setActiveActionId}/>
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}

export default BksProgressActions