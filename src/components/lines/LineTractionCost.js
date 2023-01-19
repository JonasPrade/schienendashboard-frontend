import {Table} from "react-bootstrap";

function LineTractionCost(props) {
    return(
        <div>
            <h4>{props.train_cost.traction} {props.train_cost.calculation_method}</h4>
            <div>
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>Kostengruppe</td>
                            <td>jährliche Kosten [Tsd. €]</td>
                        </tr>
                        <tr>
                            <td>Kapitalservice</td>
                            <td>{props.train_cost.debt_service}</td>
                        </tr>
                        <tr>
                            <td>Energiekosten</td>
                            <td>{props.train_cost.energy_cost}</td>
                        </tr>
                        <tr>
                            <td>Instandhaltungskosten</td>
                            <td>{props.train_cost.maintenance_cost}</td>
                        </tr>
                        <tr>
                            <td>CO2-Kosten</td>
                            <td>{props.train_cost.co2_cost}</td>
                        </tr>
                        <tr>
                            <td>Kosten sonstige Abgasemssionen</td>
                            <td>{props.train_cost.pollutants_cost}</td>
                        </tr>
                        <tr>
                            <td>Kosten Primärenergie</td>
                            <td>{props.train_cost.primary_energy_cost}</td>
                        </tr>
                        <tr>
                            <td>Gesamtkosten</td>
                            <td>{props.train_cost.cost}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default LineTractionCost
