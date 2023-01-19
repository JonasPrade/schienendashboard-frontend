import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from "react-chartjs-2";

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


function LineTractionCostDiagramm(props) {

    var labels = []
    var debt_service = []
    var energy_cost = []
    var maintenance_cost = []
    var co2_cost = []
    var pollutants_cost = []
    var primary_energy_cost = []
    props.train_costs.forEach(function (item, index) {
        labels.push(item.traction);
        debt_service.push(item.debt_service);
        energy_cost.push(item.energy_cost);
        maintenance_cost.push(item.maintenance_cost);
        co2_cost.push(item.co2_cost);
        pollutants_cost.push(item.pollutants_cost);
        primary_energy_cost.push(item.primary_energy_cost);
    });

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Diagramm Übersicht Traktionskosten nach Kostenkategorie',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                title: {
                    text: 'Kosten [Tsd. €]',
                    display: true
                },
                stacked: true,
            },
        },
    };

    return(
        <div>
            <h4>Übersicht Kosten Traktionsarten</h4>
            <div>
                <Bar options = {options} data={
                    {
                    labels,
                    datasets:[
                        {
                            label:"Kapitalkosten",
                            data: debt_service,
                            backgroundColor: '#1D3449',
                        },
                        {
                            label:"Energiekosten",
                            data: energy_cost,
                            backgroundColor: '#E9806E'
                        },
                        {
                            label:"Instandhaltungskosten",
                            data: maintenance_cost,
                            backgroundColor: '#481D49'
                        },
                        {
                            label:"CO2-Kosten",
                            data: co2_cost,
                            backgroundColor: '#1E491D'
                        },
                        {
                            label:"Kosten sonstige Abgase",
                            data: pollutants_cost,
                            backgroundColor: '#6ED7E9'
                        },
                        {
                            label:"Primärenergie",
                            data: primary_energy_cost,
                            backgroundColor: '#E09A1A'
                        }

                    ]
                }
                } />
            </div>
        </div>
    )
}

export default LineTractionCostDiagramm
