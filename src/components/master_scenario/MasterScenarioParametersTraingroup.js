import {Row, Col, Table} from "react-bootstrap";
import {Pie} from "react-chartjs-2";

function MasterScenarioParametersTraingroup(props) {


    return (
        <div>
            <Row>
                <h3>Kenngrößen Zuglinien</h3>
                <Col xl='6'>
                    <h4>Traktion nach Anzahl Züge</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data= {{
                                labels: Object.keys(props.parameters.trains_traction_count),
                                datasets: [{
                                    data: Object.values(props.parameters.trains_traction_count),
                                    backgroundColor: Object.values(props.parameters.colors)
                                }]
                            }}
                        />
                    </div>
                </Col>
                <Col xl='6'>
                    <h4>Traktion nach Betriebskilometern</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data= {{
                                labels: Object.keys(props.parameters.trains_traction_km),
                                datasets: [{
                                    data: Object.values(props.parameters.trains_traction_km),
                                    backgroundColor: Object.values(props.parameters.colors)
                                }]
                            }}
                        />
                    </div>
                </Col>
                <Col xl='6'>
                    <h4>Traktion nach Betriebskilometern (inkl. optimierte Elektrifizierung)</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data= {{
                                labels: Object.keys(props.parameters.trains_traction_km_optimised),
                                datasets: [{
                                    data: Object.values(props.parameters.trains_traction_km_optimised),
                                    backgroundColor: Object.values(props.parameters.colors)
                                }]
                            }}
                        />
                    </div>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Table striped="columns" hover bordered>
                    <thead>
                        <tr>
                            <td>Kategorie</td>
                            {props.parameters.tractions.map(traction =>
                                <td key={traction}>
                                    {traction}
                                </td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Anzahl Züge</td>
                            {Object.values(props.parameters.trains_traction_count).map(cost =>
                                <td key={cost}>
                                    {Math.round(cost).toLocaleString('de')}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <td>Betriebskilometer</td>
                            {Object.values(props.parameters.trains_traction_km).map(cost =>
                                <td key={cost}>
                                    {Math.round(cost).toLocaleString('de')}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <td>Betriebskilometer (inkl. opt. Elektrifizierung)</td>
                            {Object.values(props.parameters.trains_traction_km_optimised).map(cost =>
                                <td key={cost}>
                                    {Math.round(cost).toLocaleString('de')}
                                </td>
                            )}
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </div>


    )
}

export default MasterScenarioParametersTraingroup