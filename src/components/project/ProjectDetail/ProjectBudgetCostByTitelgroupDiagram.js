import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function ProjectBudgetCostByTitelgroupDiagram(props) {
    const budget = props.budget

    const cost_by_titlegroup = {
        "861 01": budget.cost_estimate_actual_861_01,
        "891 01": budget.cost_estimate_actual_891_01,
        "891 02": budget.cost_estimate_actual_891_02,
        "891 03": budget.cost_estimate_actual_891_03,
        "891 04": budget.cost_estimate_actual_891_04,
        "891 11": budget.cost_estimate_actual_891_11,
        "891 21": budget.cost_estimate_actual_891_21,
        "891 72": budget.cost_estimate_actual_891_72,
        "891 91": budget.cost_estimate_actual_891_91
    }

    const cost_plot = {}
    for (const [key, value] of Object.entries(cost_by_titlegroup)) {
        if (value !== 0 && value !== undefined && value !== null) {
            cost_plot[key] = value
        }
    }

    const labels = Object.keys(cost_plot)

    const data = {
        labels: labels,
        datasets:[
            {
                labels: 'Gesamtausgaben nach Titelgruppen',
                data: Object.values(cost_plot),
                backgroundColor: ["#769FB6", "#E9806E", "#204E4A", "#481D49", "#6ED7E9"]
            },
        ]
    }
    const options = {
        responsive: true,
        // maintainAspectRatio: false, // Set to false to allow custom aspect ratio
        aspectRatio: 2.5,
        plugins: {
            title: {
                display: true,
                text: 'Aufteilung nach Titelgruppe in Haushalt',
            }
        }
    }

    return(
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default ProjectBudgetCostByTitelgroupDiagram