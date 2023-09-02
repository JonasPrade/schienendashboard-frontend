import {useEffect, useState} from "react";
import getTextForProjectContentAndTextType from "../../services/texts/getTextForProjectContentAndTextType";
import Loading from "../layout/Loading";
import TextInfo from "./TextInfo";



function AllTextInfo(props) {
    const text_type_id = 2
    const [loadTextInfo, setLoadTextInfo] = useState(false)
    const [textes, setTextes] = useState([])

    useEffect(() => {
        setLoadTextInfo(true);
        getTextForProjectContentAndTextType(props.project.id, text_type_id).then(
            (response) => {
                setTextes(response);
                setLoadTextInfo(false);
            }
        )
    }, []);

    if (loadTextInfo) {
        return(
            <div>
                <h5>Infos</h5>
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
            <h5>Infos</h5>
            {textes.map((text) => (
                    <TextInfo text={text} key={text.id}/>
                )
            )}
        </div>
    )

}

export default AllTextInfo