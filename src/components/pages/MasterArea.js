import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getMasterAreaById from "../../services/master_areas/master_areas_service";
import MasterAreaDetail from "../master_area/MasterAreaDetail";
import MasterAreaSearch from "../master_area/MasterAreaSearch";
import Loading from "../layout/Loading";

function MasterArea(props) {
    let params = useParams()
    var message = ""
    const [loading, setLoading] = useState(false)
    const [masterarea, setMasterArea] = useState(null)

    useEffect(() => {
        if (params["id"] !== undefined) {
        setLoading(true);
        getMasterAreaById(params["id"]).then(
            (response) => {
                setMasterArea(response);
                setLoading(false);
            },
            error => {
                message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        )
    }}, [params]);

    if (loading){
        return(
            <Loading/>
        )
    } else if (masterarea == null || Object.keys(masterarea).length === 0){
        return(
            <MasterAreaSearch/>
        )
    }

    return(
        <div>
            <MasterAreaSearch/>
            <MasterAreaDetail master_area={masterarea}/>
        </div>
    )

}

export default MasterArea

