import {Table} from "react-bootstrap";


function TimetableTrainCostTable(props) {
    return(
        <div>
            <h4>{props.trainCost.traction} {props.trainCost.calculation_method}</h4>
            <div>
                <Table bordered hover>
                    <tbody>
                    <tr>
                        <td>Kostengruppe</td>
                        <td>jährliche Kosten [Tsd. €]</td>
                    </tr>
                    <tr>
                        <td>Kapitalservice</td>
                        <td>{props.trainCost.debt_service}</td>
                    </tr>
                    <tr>
                        <td>Energiekosten</td>
                        <td>{props.trainCost.energy_cost}</td>
                    </tr>
                    <tr>
                        <td>Instandhaltungskosten</td>
                        <td>{props.trainCost.maintenance_cost}</td>
                    </tr>
                    <tr>
                        <td>CO2-Kosten</td>
                        <td>{props.trainCost.co2_cost}</td>
                    </tr>
                    <tr>
                        <td>Kosten sonstige Abgasemssionen</td>
                        <td>{props.trainCost.pollutants_cost}</td>
                    </tr>
                    <tr>
                        <td>Kosten Primärenergie</td>
                        <td>{props.trainCost.primary_energy_cost}</td>
                    </tr>
                    <tr>
                        <td>Gesamtkosten</td>
                        <td>{props.trainCost.cost}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TimetableTrainCostTable
