import {Bar} from "react-chartjs-2";
import colors from '../../custom.scss'
import {
    Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BksProgressDiagram(props){
    const progress = props.progress

    const options={
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }

    const labels = [props.translationProgressNames["pruefung"], props.translationProgressNames["vorbereitung"], props.translationProgressNames["vorbereitung_changed"], props.translationProgressNames["umsetzung"], props.translationProgressNames["umsetzung_changed"]]


    const data = {
        labels,
        datasets: [
            {
                label: 'Beschleunigungskommission Schiene',
                data: [progress.pruefung.length, progress.vorbereitung.length, progress.vorbereitung_changed.length, progress.umsetzung.length, progress.umsetzung_changed.length],
                backgroundColor: colors.info,
            }
        ]
    }

    return(
        <div>
            <Bar
                options={options} data={data}
            />
            <p className="mt-1 text-muted">"Unbekannt" kann auch an Fehlern in der Datenbereitstellung liegen.</p>
        </div>
    )
}

export default BksProgressDiagram