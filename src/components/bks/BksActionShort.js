import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function BksActionShort(props) {
    const action = props.action

    function changeActiveAction(){
        props.setActiveActionId(props.action.id)
    }


    return(
        <Card className="bg-light h-100">
            <Card.Header><h5>{action.name}</h5></Card.Header>
            <Card.Body>
                <Card.Text>
                    Umsetzung: {action.review_1_status}
                    <Button variant='outline-info' className="mt-1" onClick={changeActiveAction}>
                        Mehr Informationen
                    </Button>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {/*TODO: Add Cluster and Handlungsfeld*/}
                <p>Cluster: {action.cluster_number}</p>
            </Card.Footer>
        </Card>
    )
}

export default BksActionShort;
