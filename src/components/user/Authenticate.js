import {Navigate} from "react-router-dom";
import checkValidToken from "../../services/CheckToken.service";
import {useEffect, useState} from "react";
import Loading from "../layout/Loading";

function Authenticate(props) {
    const [isLoading, changeStatusLoading] = useState(true)
    const [token, changeTokenStatus] = useState(false)

    useEffect(() => {
        changeStatusLoading(true);

        checkValidToken(props).then(
            (response) => {
                changeTokenStatus(response);
                changeStatusLoading(false);
            })
            .catch((error) => {
                changeTokenStatus(error);
                changeStatusLoading(false);
            })
    }, [])

    if (isLoading){
        return(
            <section>
                <Loading/>
            </section>
        );
    } else {
        if (token.valid) {
            return (
                <div>
                    <main>
                        {props.children}
                    </main>
                </div>
            );
        } else {
            return (
                <Navigate to='/logout'/>
            );
        }
    }

}

export default Authenticate