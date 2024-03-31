import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";
import ProjectBudgetCostTotalHistoryDiagram from "../project/ProjectDetail/ProjectBudgetCostTotalHistoryDiagram";
import ProjectBudgetCostProgressDiagram from "../project/ProjectDetail/ProjectBudgetCostProgressDiagram";
import ProjectBudgetCostByTitelgroupDiagram from "../project/ProjectDetail/ProjectBudgetCostByTitelgroupDiagram";
import ProjectBudgetDiagramCostByStakeholderDiagram
    from "../project/ProjectDetail/ProjectBudgetCostByStakeholerDiagram";
import Button from "react-bootstrap/Button";

function FinveItemShort ({ finve, showDiagrams, showButtonLong, setActiveFinve=null }) {
    finve.budgets.sort((a, b) => a.budget_year - b.budget_year);
    const last_budget = finve.budgets[finve.budgets.length - 1]

    function onSubmitRequestLong(e) {
        e.preventDefault()
        setActiveFinve(finve)
    }

    return(
        <div style={{ maxHeight: '100vh', overflow: 'auto'}}>
            <Card className="bg-light mt-3">
                <Card.Body>
                    <Card.Title>
                        Finanzierungsvereinbarung: {finve.name} (geschlossen {finve.starting_year})
                    </Card.Title>
                    <Card.Text>
                        Budgetplan von {last_budget?.budget_year} <br/>
                        Aktuell erwartete Gesamtkosten: {last_budget?.cost_estimate_actual.toLocaleString('de')} Tsd. €.
                    </Card.Text>
                    {showDiagrams &&
                    <Row>
                        <Col xl={6}>
                            <ProjectBudgetCostTotalHistoryDiagram finve={finve}/>
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
                    }
                    {showButtonLong &&
                        <div>
                            <Button variant='outline-primary' onClick={onSubmitRequestLong}>
                                Mehr Informationen
                            </Button>
                        </div>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default FinveItemShort
