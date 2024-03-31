import {useEffect, useState} from "react";
import {getFinve} from "../../services/finve/finve.service";
import Loading from "../layout/Loading";
import {Col, Row} from "react-bootstrap";
import ProjectBudgetCostTotalHistoryDiagram from "../project/ProjectDetail/ProjectBudgetCostTotalHistoryDiagram";
import ProjectBudgetCostProgressDiagram from "../project/ProjectDetail/ProjectBudgetCostProgressDiagram";
import ProjectBudgetCostByTitelgroupDiagram from "../project/ProjectDetail/ProjectBudgetCostByTitelgroupDiagram";
import ProjectBudgetDiagramCostByStakeholderDiagram
    from "../project/ProjectDetail/ProjectBudgetCostByStakeholerDiagram";
import ProjectItemShort from "../project/ProjectItemShort";
import FinveDetailKPIs from "./FinveDetailKPIs";


function FinveItemLong({finve_id}) {
    const [finveLoading, setFinveLoading] = useState(true)
    const [finve, setFinve] = useState([])

    useEffect(() => {
        setFinveLoading(true)
        getFinve(finve_id)
            .then(response => {
                setFinve(response.finve)
            })
            .catch(error => {
                console.error("Fehler beim Abrufen der Finanzierungsvereinbarung:", error)
            })
            .finally(() => {
                setFinveLoading(false)
            })
    }, [])

    if (finveLoading) {
        return <Loading/>
    }

    var last_budget = []
    if (Object.keys(finve).length !== 0) {
        finve.budgets.sort((a, b) => a.budget_year - b.budget_year);
        last_budget = finve.budgets[finve.budgets.length - 1]
    }

    return(
        <div>
            {finveLoading ? <Loading/> :
                <div>
                    <h3>{finve.name} (geschlossen {finve.starting_year}</h3>
                    <h4>Überblick Finanzierungsstand</h4>
                    <FinveDetailKPIs
                        finve={finve}
                        last_budget={last_budget}
                    />
                    <h4>Entwicklung Kosten und -verteilung</h4>
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
                    <h4 className="mt-3">Verbundene Projekte</h4>
                    {finve.project_contents.map((project) => (
                        <ProjectItemShort
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default FinveItemLong
