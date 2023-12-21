import {Bar} from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import colors from '../../custom.scss'

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function TimetableTrainCostDiagramm(props) {
    var labels = []
    var debt_service = []
    var energy_cost = []
    var maintenance_cost = []
    var co2_cost = []
    var pollutants_cost = []
    var primary_energy_cost = []

    if (props.trainCosts === null) {
        return(
            <div>
                <p>Keine Betriebskosten für diese Linie vorhanden</p>
            </div>
        )
    } else {

        props.trainCosts.forEach(function (item, index) {
            labels.push(item.traction);
            debt_service.push(item.debt_service);
            energy_cost.push(item.energy_cost);
            maintenance_cost.push(item.maintenance_cost);
            co2_cost.push(item.co2_cost);
            pollutants_cost.push(item.pollutants_cost);
            primary_energy_cost.push(item.primary_energy_cost);
        });
    }

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
        <div className="mt-3">
            <h4>Übersicht Kosten Traktion</h4>
            <div>
                <Bar options = {options} data={
                    {
                        labels,
                        datasets:[
                            {
                                label:"Kapitalkosten",
                                data: debt_service,
                                backgroundColor: colors.diagram_color_1
                            },
                            {
                                label:"Energiekosten",
                                data: energy_cost,
                                backgroundColor: colors.diagram_color_2
                            },
                            {
                                label:"Instandhaltungskosten",
                                data: maintenance_cost,
                                backgroundColor: colors.diagram_color_3
                            },
                            {
                                label:"CO2-Kosten",
                                data: co2_cost,
                                backgroundColor: colors.green_color
                            },
                            {
                                label:"Kosten sonstige Abgase",
                                data: pollutants_cost,
                                backgroundColor: colors.diagram_color_4
                            },
                            {
                                label:"Primärenergie",
                                data: primary_energy_cost,
                                backgroundColor: colors.diagram_color_5
                            }

                        ]
                    }
                } />
            </div>
        </div>
    )
}

export default TimetableTrainCostDiagramm