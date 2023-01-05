import Container from "react-bootstrap/Container";
import LineSearch from "../lines/LineSearch";
import LineDetail from "../lines/LineDetail";
import { useParams } from 'react-router-dom'
import getTraingroupById from "../../services/lines/line_service";
import {useState} from "react";
import {useEffect} from "react";

function Lines(props) {
    let params = useParams();
    var message = ""
    const [loading, setLoading] = useState(false)
    const [traingroup, setTraingroup] = useState(null)

    useEffect(() => {
        setLoading(true);
        getTraingroupById(params["id"]).then(
            (response) => {
                setTraingroup(response);
                setLoading(false);
            },
            error => {
                message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        )
        }, [params]);

    if (loading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        )
    } else if (traingroup == null || Object.keys(traingroup).length === 0){
        return(
            <LineSearch
            />
        )
    }

    return(
        <Container>
            <LineSearch
            />
            <LineDetail
                activeLine={traingroup}
            />
        </Container>
    )
}

export default Lines
