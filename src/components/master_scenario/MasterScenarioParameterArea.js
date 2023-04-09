import {Col, Row, Table} from "react-bootstrap";
import {Pie} from "react-chartjs-2";

function MasterScenarioParameterArea(props) {


    return(
        <div>
            <Row>
                <h3>Kenngrößen Infrastruktur</h3>
                <Col xl='6'>
                    <h4>Anteil Traktion nach Anzahl Untersuchungsgebiete</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: props.parameters.tractions,
                                datasets: [{
                                    label: 'Anzahl Untersuchungsgebiete',
                                    data: Object.values(props.parameters.area_traction_count),
                                    backgroundColor: Object.values(props.parameters.colors)
                                }]
                            }}
                        />
                    </div>
                </Col>
                <Col xl='6'>
                    <h4>Anteil Traktion optimierte Elektrifizierung</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: Object.keys(props.parameters.optimised_electrification),
                                datasets: [{
                                    data: Object.values(props.parameters.optimised_electrification),
                                    backgroundColor: Object.values(props.parameters.colors)
                                }]
                            }}
                        />
                    </div>
                </Col>
                <Col xl='6'>
                    <h4>Anteil Traktion Streckenkilometer (inkl. optimierter Elektrifizierung)</h4>
                    <div style={{height: "400px"}}>
                        <Pie
                            data={{
                                labels: props.parameters.tractions,
                                datasets: [{
                                    data: Object.values(props.parameters.area_traction_km),
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
                            <td>Anzahl Untersuchungsgebiete</td>
                            {Object.values(props.parameters.area_traction_count).map(cost =>
                                <td key={cost}>
                                    {Math.round(cost).toLocaleString('de')}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <td>Streckenkilometer</td>
                            {Object.values(props.parameters.optimised_electrification).map(cost =>
                                <td key={cost}>
                                    {Math.round(cost).toLocaleString('de')}
                                </td>
                            )}
                        </tr>
                        <tr>
                            <td>Streckenkilometer (inkl. opt. Elektrifizierung)</td>
                            {Object.values(props.parameters.area_traction_km).map(cost =>
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

export default MasterScenarioParameterArea