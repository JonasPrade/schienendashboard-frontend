import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ProjectBudgetostProgressDiagram(props) {

    const data = {
        labels: ["Finanzplanung"],
        datasets:[
            {
                label: "Ausgaben bis " + (props.budget.budget_year-1).toString(),
                data: [props.budget.spent_two_years_previous],
                backgroundColor: ["#769FB6"]
            },
            {
                label: "Erwartete Ausgaben in " + (props.budget.budget_year).toString(),
                data: [props.budget.allowed_previous_year],
                backgroundColor: ["#E9806E"]
            },
            {
                label: "Ausgabereste bis " + (props.budget.budget_year).toString(),
                data: [props.budget.spending_residues],
                backgroundColor: ["#6ED7E9"]
            },
            {
                label: "Geplante Ausgaben in " + (props.budget.budget_year+1).toString(),
                data: [props.budget.year_planned],
                backgroundColor: ["#204E4A"]
            },
            {
                label: "Übrige Ausgaben ab " + (props.budget.budget_year+2).toString(),
                data: [props.budget.next_years],
                backgroundColor: ["#E09A1A"]
            }
        ]
    }

    const options = {
        indexAxis: 'y',
        responsive: true,
        // maintainAspectRatio: false, // Set to false to allow custom aspect ratio
        aspectRatio: 2.5,
        plugins: {
            title: {
                display: true,
                text: 'Ausgabe der Mittel über Jahre',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return tooltipItems.dataset.label + ' ' + tooltipItems.parsed.x.toLocaleString('de') + ' Tsd. €';
                    }
                }

            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }

    return(
        <div>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default ProjectBudgetostProgressDiagram