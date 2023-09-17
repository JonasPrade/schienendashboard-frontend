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
import {useEffect, useState} from "react";
import getProgressOfSubprojects from "../../../services/project_content/getprogresssubprojects";
import Loading from "../../layout/Loading";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function ProjectProgressSubProjects(props) {
    const [loadingProgress, setLoadingProgress] = useState(true)
    const [progress, setProgress] = useState(null)

    useEffect(()=> {
        setLoadingProgress(true);
        getProgressOfSubprojects(props.project_id).then(
            (response) => {
                setProgress(response);
                setLoadingProgress(false);
            }
        )
    }, []);

    if (loadingProgress === true){
        return(
            <div>
                <Loading/>
            </div>
        )
    }

    let sum_projects = 0
    for (const status in progress){
        sum_projects += progress[status]
    }

    if (progress === 0 ){
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
                data: [progress.pending, progress.lp_12, progress.lp_34, progress.bau, progress.ibn_erfolgt, progress.not_known],
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