import Card from "react-bootstrap/Card";
import ProjectBudgetCostTotalHistoryDiagram from "./ProjectBudgetCostTotalHistoryDiagram";
import ProjectBudgetCostByTitelgroupDiagram from "./ProjectBudgetCostByTitelgroupDiagram";
import {Col, Row} from "react-bootstrap";
import ProjectBudgetDiagramCostByStakeholderDiagram from "./ProjectBudgetCostByStakeholerDiagram";
import ProjectBudgetCostProgressDiagram from "./ProjectBudgetCostProgressDiagram";

function ProjectDetailFinVe(props) {

    props.finve.budgets.sort((a, b) => a.budget_year - b.budget_year);
    const last_budget = props.finve.budgets[props.finve.budgets.length - 1]

    return(
        <div style={{ maxHeight: '100vh', overflow: 'auto'}}>
            <Card className="bg-light mt-3">
                <Card.Body>
                    <Card.Title>
                        Finanzierungsvereinbarung: {props.finve.name} (abgeschlossen {props.finve.starting_year})
                    </Card.Title>
                    <Card.Text>
                            Budgetplan von {last_budget.budget_year} <br/>
                            Aktuell erwartete Gesamtkosten: {last_budget.cost_estimate_actual.toLocaleString('de')} Tsd. €.
                    </Card.Text>
                    <Row>
                        <Col xl={6}>
                            <ProjectBudgetCostTotalHistoryDiagram finve={props.finve}/>
                        </Col>
                        <Col xl={6}>
                            <ProjectBudgetCostProgressDiagram budget={last_budget}/>
                        </Col>
                        <Col xl={6}>
                            <ProjectBudgetCostByTitelgroupDiagram budget={last_budget}/>
                        </Col>
                        <Col xl={6}>
                            <ProjectBudgetDiagramCostByStakeholderDiagram budget={last_budget}/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>

    )
}

export default ProjectDetailFinVe