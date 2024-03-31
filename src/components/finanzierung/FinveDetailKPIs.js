import TooltipWrapper from "../layout/TooltipWrapper";
import {Table} from "react-bootstrap";


function FinveDetailKPIs({ finve, last_budget }) {
    const year = new Date().getFullYear()

    return(
        <div>
            <p>
                Kennzahlen Stand {last_budget.budget_year}. {last_budget.budget_year === year-1 && <i>Die Kostenübersicht ist aktuell. Im aktuellen Haushalt sind die Finanzierungsvereinbarungen zum Stand letzten Jahres eingetragen</i>}
            </p>
            <Table>
                <thead>
                    <tr>
                        <th>Kennzahl</th>
                        <th>Wert</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Kostenerwartung {last_budget.budget_year} aktuell</td>
                    <td>{last_budget.cost_estimate_actual.toLocaleString('de')} Tsd. €</td>
                </tr>
                {last_budget.cost_estimate_last_year &&
                    <tr>
                        <td>Kostenerwartung {last_budget.budget_year - 1}</td>
                        <td>{last_budget.cost_estimate_last_year.toLocaleString('de')} Tsd. €</td>
                    </tr>
                }
                {last_budget.cost_estimate_last_year &&
                    <tr>
                        <td>Kostensteigerung zu letztem Jahr</td>
                        <td>{(last_budget.cost_estimate_actual / last_budget.cost_estimate_last_year - 1) * 100}%</td>
                    </tr>
                }
                {last_budget.cost_estimate_original &&
                    <tr>
                        <td>Ursprüngliche Kostenerwartung</td>
                        <td>{last_budget.cost_estimate_original.toLocaleString('de')} Tsd. €</td>
                    </tr>
                }
                {last_budget.cost_estimate_original &&
                    <tr>
                        <td>Kostensteigerung zu ursprünglichen Kosten</td>
                        <td>{((last_budget.cost_estimate_actual/last_budget.cost_estimate_original-1)*100).toLocaleString('de')} %</td>
                    </tr>
                }
                </tbody>
            </Table>
        </div>
    )
}

export default FinveDetailKPIs
