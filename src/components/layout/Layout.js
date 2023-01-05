//import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation";
import {Col} from "react-bootstrap";
import Footer from "./Footer";

function Layout(props) {
    return (
        <div className="bg-background w-100">
            <MainNavigation loggedIn={props.loggedIn}/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;