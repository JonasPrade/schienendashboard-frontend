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
function ProjectProgressSubProjects(props) {
    const progress_sub_projects = props.progress_sub_projects

    let sum_projects = 0
    for (const status in progress_sub_projects){
        sum_projects += progress_sub_projects[status]
    }

    if (sum_projects === 0 ){
        return(
            <div>
                <p>Kein Projektstatus verfügbar</p>
            </div>
        )
    }

    // Generation of diagram
    const labels = ['ausstehend', 'LP 12', 'LP 34', 'in Bau', 'in Betrieb', 'nicht bekannt']

    const data = {
        labels,
        datasets: [
            {
                label: 'Anzahl',
                data: [progress_sub_projects.pending, progress_sub_projects.lp_12, progress_sub_projects.lp_34, progress_sub_projects.bau, progress_sub_projects.ibn_erfolgt, progress_sub_projects.not_known],
                borderWidth: 1,
                backgroundColor: '#769FB6'
            }
        ]
    }

    const options = {
        scales:{
            y: {
                beginAtZero: true,
                ticks:{
                    stepSize: 1,
                    suggestedMin: 1
                }
            }
        }
    }

    return(
        <div>
            <h6>Projektfortschritt Teilprojekte:</h6>
            <Bar options={options} data={data} className="h-100"/>
        </div>
    )
}

export default ProjectProgressSubProjects