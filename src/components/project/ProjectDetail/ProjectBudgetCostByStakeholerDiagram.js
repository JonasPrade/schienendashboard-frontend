import {Doughnut} from "react-chartjs-2";

function ProjectBudgetDiagramCostByStakeholderDiagram(props) {
    const budget = props.budget

    function check_number(number) {
        if (number === null) {
            return 0
        }
        return number
    }

    const cost_by_stakeholder = {
        "Eigenanteil EIU": check_number(budget.cost_estimate_actual_equity),
        "Anteile Dritter (z.B. Länder)": check_number(budget.cost_estimate_actual_third_parties),
    }
    //TODO: use cost_actual - sum(rest)
    cost_by_stakeholder["Anteil Bund"] = budget.cost_estimate_actual - cost_by_stakeholder["Eigenanteil EIU"] - cost_by_stakeholder["Anteile Dritter (z.B. Länder)"]

    const labels = Object.keys(cost_by_stakeholder)

    const data = {
        labels: labels,
        datasets:[
            {
                labels: 'Gesamtausgaben nach Titelgruppen',
                data: Object.values(cost_by_stakeholder),
                backgroundColor: ['#204E4A', '#769FB6', '#E9806E']
            }
        ]
    }

    const options = {
        responsive: true,
        // maintainAspectRatio: false, // Set to false to allow custom aspect ratio
        aspectRatio: 2.5,
        plugins: {
            title: {
                display: true,
                text: 'Aufteilung nach bezahlenden Akteuren',
            },
        }
    }

    return(
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default ProjectBudgetDiagramCostByStakeholderDiagram