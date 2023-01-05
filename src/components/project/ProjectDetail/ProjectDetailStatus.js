import {Col, Row} from "react-bootstrap";


function  ProjectDetailStatus(props) {
    // TODO: New symbol for parlamentarische Befassung

    var parl_befassung
    if (props.activeProjectVariant.parl_befassung_date && props.activeProjectVariant.parl_befassung_planned) {
        parl_befassung = "Parlamentarische Befassung erfolgte am" + props.activeProjectVariant.parl_befassung_date
    } else if (props.activeProjectVariant.parl_befassung_planned) {
        parl_befassung = "Parlamentarische Befassung geplant"
    } else {
        parl_befassung = "Keine parlamentarische Befassung geplant"
    }

    var ro
    if (props.activeProjectVariant.ro_finished && props.activeProjectVariant.ro_finished_date){
        ro = props.activeProjectVariant.ro_finished_date
    } else if (props.activeProjectVariant.ro_finished) {
        ro = "✅"
    } else {
        ro = "❌"
    }

    var pf
    if (props.activeProjectVariant.pf_finished && props.activeProjectVariant.pf_finished_date){
        pf = "Planfeststellung fertig" + props.activeProjectVariant.pf_finished_date
    } else if (props.activeProjectVariant.pf_finished) {
        pf = "Planfeststellung fertig"
    } else {
        pf = "❌"
    }
    
    return(
        <div>
            <p>{parl_befassung}</p>
            { ro &&
                <p>Raumordnung: {ro}</p>
            }
            { pf &&
                <p>Planfeststellung: {pf}</p>
            }
        </div>
    )
}

export default ProjectDetailStatus