import {Row, Table} from "react-bootstrap";

function MasterScenarioParameterCost(props) {
    return(
        <div>
            <h3 className='mt-3'>Kenngrößen Finanzen </h3>
            <Row>
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>Infrastrukturkosten</td>
                            <td>{Math.round(props.parameters.infrastructure_cost_sum).toLocaleString('de')} Tsd. € Barwert</td>
                        </tr>
                        <tr>
                            <td>Betriebskosten</td>
                            <td>{Math.round(props.parameters.operating_cost_sum).toLocaleString('de')} Tsd. € Barwert</td>
                        </tr>
                        <tr>
                            <td>Gesamtkosten</td>
                            <td>{Math.round(props.parameters.operating_cost_sum + props.parameters.infrastructure_cost_sum).toLocaleString('de')} Tsd. € Barwert</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}

export default MasterScenarioParameterCost