import {useEffect, useState} from "react";
import getTextForProjectContentAndTextType from "../../services/texts/getTextForProjectContentAndTextType";
import Loading from "../layout/Loading";
import TextWebsite from "./TextWebsite";



function AllTextWebsites(props) {
    const text_type_id = 1
    const [loadTextWebsites, setLoadTextWebsites] = useState(false)
    const [textes, setTextes] = useState([])

    useEffect(() => {
        setLoadTextWebsites(true);
        getTextForProjectContentAndTextType(props.project.id, text_type_id).then(
            (response) => {
                setTextes(response);
                setLoadTextWebsites(false);
            }
        )
    }, []);

    if (loadTextWebsites) {
        return(
            <div>
                <h5>Websites</h5>
                <Loading/>
            </div>

        )
    }

    if (textes.length === 0) {
        return(
            <div></div>
        )
    }

    return(
        <div>
            <h5>Links</h5>
            {textes.map((text) => (
                <div className="mb-1"  key={text.id}>
                    <TextWebsite key={text.id} text={text}/>
                </div>
                )
            )}
        </div>
    )

}

export default AllTextWebsites