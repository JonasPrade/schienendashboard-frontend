import {Line} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ProjectBudgetCostTotalHistoryDiagram(props) {
    const budgets = props.finve.budgets.sort((a, b) => a.budget_year - b.budget_year);
    const last_budget = props.finve.budgets[props.finve.budgets.length - 1]
    const first_budget = props.finve.budgets[0]

    // map the budgets to object that have the year as key and the cost_estimate_actual as value
    const budget_cost_history = budgets.map((budget) => {
        return {year: budget.budget_year, cost_estimate: budget.cost_estimate_actual}
    })

    //add to budget_cost_history the cost of the first year. That value can exists in the one of the budgets. key is starting_year, value is cost_estimate_original
    // only add if the first budget is not the same as the starting year and there exists are value for the starting year
    const starting_year = props.finve.budgets[0].starting_year
    if (starting_year !== null && props.finve.budgets[0].cost_estimate_original !== null && first_budget.budget_year > starting_year){
        budget_cost_history.unshift({year: props.finve.budgets[0].starting_year, cost_estimate: props.finve.budgets[0].cost_estimate_original})
    }

    // lables are the keys of the budget_cost_history

    //this function add labels for all years between the first and the last year
    const getLabels = (budget_history) => {
        // Extract unique years from the budget_cost_history
        const uniqueYears = Array.from(new Set(budget_history.map((budget) => budget.year)));

        // Generate a range of years from the first to the last year
        const startYear = Math.max(Math.min(...uniqueYears), first_budget.starting_year); // make sure that are no years before the starting year
        const endYear = Math.max(...uniqueYears);
        const allYears = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

        return allYears.map((year) => year.toString()); // Convert years to strings if needed
    };

    const labels = getLabels(budget_cost_history);

    const data = {
        labels,
        datasets: [
            {
                data: getLabels(budget_cost_history).map((year) => {
                    const budgetEntry = budget_cost_history.find((budget) => budget.year.toString() === year);
                    return budgetEntry ? budgetEntry.cost_estimate : null; // Set to null if the year is not found in budget_cost_history
                }),
                borderColor: '#769FB6',
                backgroundColor: '#769FB6',
            },
        ],
    }

    const options = {
        responsive: true,
        // maintainAspectRatio: false, // Set to false to allow custom aspect ratio
        aspectRatio: 2.5,
        spanGaps: true,
        scales:{
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Entwicklung Gesamtkosten',
            },
        },
    };

    return(
        <div>
            {labels.length > 1 ?
                <Line data={data} options={options}/>:
                <p className="text-muted">Informationen nur über ein Jahr vorhanden. Daher kein Diagramm über Entwicklung Gesamtkosten möglich</p>
            }
        </div>

    )
}

export default ProjectBudgetCostTotalHistoryDiagram