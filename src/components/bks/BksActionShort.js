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
                    <p>{action.review_2_start}</p>
                    <Button variant='outline-info' className="mt-1" onClick={changeActiveAction}>
                        Mehr Informationen
                    </Button>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {/*TODO: Add Cluster and Handlungsfeld*/}
                <p>Cluster: {action.cluster_number}</p>
                <p>Status: {action.review_2_status}</p>
            </Card.Footer>
        </Card>
    )
}

export default BksActionShort;
