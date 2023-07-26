import {ProgressBar} from "react-bootstrap";


function ProjectProgress(props) {

    function progress_bar(project) {
        if (project.lp_12 === 1) {
            return(
                <div>
                    <ProgressBar variant = "info" now={25} label={`LP 1-2`} />
                    <p className='mt-1'>Leistungsphase 1-2 aktiv (Grundlagenermittlung & Vorplanung) </p>
                </div>
            )
        } else if (project.lp_34 === 1) {
            return(
                <div>
                    <ProgressBar variant = "info" now={50} label={`LP 3-4`}/>
                    <p className='mt-1'>Leistungsphase 3-4 aktiv (Entwurfs- und Genehmigungsplanung) </p>
                </div>
            )
        } else if (project.bau === 1) {
            return (
                <div>
                    <ProgressBar variant="info" now={75} label={`LP 5-9`}/>
                    <p className='mt-1'>Leistungsphase 5-9 aktiv (Ausführungsplanung, Vergabe, Bau) </p>
                </div>
            )
        } else if (project.ibn_erfolgt === 1) {
            return (
                <div>
                    <ProgressBar variant="success" now={100} label={`Fertiggestellt`}/>
                    <p className='mt-1'>Inbetriebnahme ist erfolgt</p>
                </div>
            )

        } else {
            return(
                    <p>Kein Projektstatus verfügbar</p>
                )
        }
    }

    return(
        <div>
            {progress_bar(props.project)}
        </div>
    )

}

export default ProjectProgress
