import {Dropdown, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import getTrainPartById from "../../services/lines/train_part_service";
import Loading from "../layout/Loading";


function TimetableTrainGroupTimetable(props) {
    const [activeTrain, setActiveTrain] = useState(props.activeLine.trains[0])
    const [loading, setLoading] = useState(true)
    var message = ""
    const [TrainPart, setTrainPart] = useState(null)

    function submitChangeTrain(e) {
        e.preventDefault();
        let activeTrainId = e.target.dataset.index;
        setActiveTrain(props.activeLine.trains[props.activeLine.trains.findIndex(object => {
            return object.id === activeTrainId
        })]);
    }

    let tt_ocps = [];
    useEffect(() => {
        setLoading(true);
        getTrainPartById(activeTrain.train_part.id).then(
            (response) => {
                setLoading(false);
                setTrainPart(response);
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
    }, [activeTrain]);

    if (TrainPart !== null) {
        for (const index in TrainPart.timetable_ocps) {
            const tt_ocp = TrainPart.timetable_ocps[index]
            if (tt_ocp.ocp_type === 'stop') {
                let time_published_arrival = false
                let time_published_departure = false
                for (const index_time in tt_ocp.times){
                    if (tt_ocp.times[index_time].scope === 'published'){
                        time_published_arrival = tt_ocp.times[index_time].arrival
                        time_published_departure = tt_ocp.times[index_time].departure
                    }
                }
                tt_ocps.push({
                    "tt_ocp": tt_ocp,
                    "arrival": time_published_arrival,
                    "departure": time_published_departure
                })
            }
        }
    }

    return(
        <div>
            <h4>Fahrplan</h4>
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown_train'>
                        {activeTrain.id}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.activeLine.trains.map((train) =>
                            <Dropdown.Item key={train.id} data-index={train.id} onClick={submitChangeTrain}>{train.id}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="mt-3">
                {!loading ?
                <Table>
                    <tr>
                        <td>Station</td>
                        <td>Ankunft</td>
                        <td>Abfahrt</td>
                    </tr>
                    {tt_ocps.map((stop)=>
                    <tr key={stop.tt_ocp.id}>
                        <td>{stop.tt_ocp.ocp.name}</td>
                        <td>{stop.arrival}</td>
                        <td>{stop.departure}</td>
                    </tr>
                    )}
                </Table>
                :
                <Loading/>
                }
            </div>
        </div>
    )
}

export default TimetableTrainGroupTimetable