import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getMasterScenarioById from "../../services/master_scenario/master_scenario_service";
import MasterScenarioSearch from "../master_scenario/MasterScenarioSearch";
import MasterScenarioDetail from "../master_scenario/MasterScenarioDetail";

function MasterScenario(props) {
    let params = useParams()
    var message = ""
    const [loading, setLoading] = useState(false)
    const [masterscenario, setMasterScenario] = useState(null)

    useEffect(() => {
        if (params["id"] !== undefined) {
            setLoading(true);
            getMasterScenarioById(params["id"]).then(
                (response) => {
                    setMasterScenario(response);
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
        }}, [params]);


    if (loading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        )
    } else if (masterscenario == null || Object.keys(masterscenario).length === 0){
        return(
            <MasterScenarioSearch/>
        )
    }

    return(
        <div>
            <Container>
                <MasterScenarioSearch/>
                <MasterScenarioDetail master_scenario={masterscenario}/>
            </Container>
        </div>
    )
}

export default MasterScenario
