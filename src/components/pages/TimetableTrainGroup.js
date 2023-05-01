import Container from "react-bootstrap/Container";
import TimetableTrainGroupSearch from "../timetabletraingroup/TimetableTrainGroupSearch";
import TimetableTrainGroupDetail from "../timetabletraingroup/TimetableTrainGroupDetail";
import { useParams } from 'react-router-dom'
import getTraingroupById from "../../services/lines/line_service";
import {useState} from "react";
import {useEffect} from "react";
import Loading from "../layout/Loading";

function TimetableTrainGroup(props) {
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
                <Loading/>
            </section>
        )
    } else if (traingroup == null || Object.keys(traingroup).length === 0){
        return(
            <TimetableTrainGroupSearch
            />
        )
    }

    return(
        <Container>
            <TimetableTrainGroupSearch
            />
            <TimetableTrainGroupDetail
                activeLine={traingroup}
            />
        </Container>
    )
}

export default TimetableTrainGroup
