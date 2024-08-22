import { Bar } from "react-chartjs-2";
import colors from '../../custom.scss';
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

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    }
};

function BksProgressDiagram({ progress, translationProgressNames }) {
    const progressKeys = [
        "pruefung", "vorbereitung", "vorbereitung_changed",
        "umsetzung", "umsetzung_changed", "nicht_umgesetzt",
        "fertig", "fertig_changed"
    ];

    const labels = progressKeys.map(key => translationProgressNames[key]);

    const data = {
        labels,
        datasets: [
            {
                label: 'Beschleunigungskommission Schiene',
                data: progressKeys.map(key => progress[key].length),
                backgroundColor: colors.info,
            }
        ]
    };

    return (
        <div>
            <Bar options={options} data={data} />
            <p className="mt-1 text-muted">
                "Unbekannt" kann auch an Fehlern in der Datenbereitstellung liegen.
            </p>
        </div>
    );
}

export default BksProgressDiagram;