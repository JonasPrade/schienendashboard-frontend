import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function MasterAreaShort(props) {
    let navigate = useNavigate();

    function openMasterArea(e) {
        e.preventDefault();
        props.setMasterArea(props.area)
        navigate(`/master_area/${props.area.id}`);
    }

    return (
        <div key={props.area.id} className="square border bg-light rounded p-3 m-1">
            <h5>Untersuchungsgebiet {props.area.id}</h5>
            <p>Traktion: {props.area.cost_overview.minimal_cost}</p>
            <p>Kategorien: {props.area.categories.map(category =>
                <a key={category}>{category} </a>
                )}
            </p>
            <Link to={'/master_area/'+props.area.id}>
                <Button variant="primary" onClick={openMasterArea}>
                    Details
                </Button>
            </Link>

        </div>
    )
}

export default MasterAreaShort
