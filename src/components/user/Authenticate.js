import {Navigate} from "react-router-dom";
import checkValidToken from "../../services/CheckToken.service";
import {useEffect, useState} from "react";

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

    /*
    useEffect(() => {
        if (tokeValid===true) {
            return (
                <div>
                    <main>
                        {props.children}
                    </main>
                </div>
            )
        } else {
            return (
                <Navigate to='/logout'/>
            )
        }

    }, [tokeValid])

     */

    if (isLoading){
        return(
            <section>
                <p>Loading...</p>
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