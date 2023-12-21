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
import colors from '../../../custom.scss';
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
                backgroundColor: [colors.diagram_color_1]
            },
            {
                label: "Erwartete Ausgaben in " + (props.budget.budget_year).toString(),
                data: [props.budget.allowed_previous_year],
                backgroundColor: [colors.diagram_color_2]
            },
            {
                label: "Ausgabereste bis " + (props.budget.budget_year).toString(),
                data: [props.budget.spending_residues],
                backgroundColor: [colors.diagram_color_3]
            },
            {
                label: "Geplante Ausgaben in " + (props.budget.budget_year+1).toString(),
                data: [props.budget.year_planned],
                backgroundColor: [colors.diagram_color_4]
            },
            {
                label: "Übrige Ausgaben ab " + (props.budget.budget_year+2).toString(),
                data: [props.budget.next_years],
                backgroundColor: [colors.diagram_color_5]
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