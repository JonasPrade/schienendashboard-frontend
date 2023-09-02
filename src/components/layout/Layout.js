//import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout(props) {
    return (
        <div className="bg-background w-100">
            <MainNavigation loggedIn={props.loggedIn}/>
            <main className="pb-5">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;