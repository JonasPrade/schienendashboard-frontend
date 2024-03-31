import {Route, Routes} from 'react-router-dom';
import React from 'react';

import Home from "./components/pages/Home";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";
import Layout from "./components/layout/Layout";
import Profile from "./components/user/Profile";
import useLocalStorage from "./services/LocalStorageHook.service";
import TimetableTrainGroup from "./components/pages/TimetableTrainGroup"
import MasterArea from "./components/pages/MasterArea";
import MasterScenario from "./components/pages/Scenario";
import Project from "./components/pages/Project";
import ProjectGroup from "./components/pages/ProjectGroup";
import Bks from "./components/pages/Bks";
import Finance from "./components/pages/Finance";

function App() {

    // user
    const [user, changeUser] = useLocalStorage("user", false);

    //TODO: Update profile to new schema (without stupid classes)

    return (
        <Layout loggedIn={user}>
            <Routes>
                <Route path="/" element={<Home loggedIn={user}/>} />
                {!user &&
                    <Route path="/login" element={<Login  user={user} changeUser={changeUser} />} />
                }
                <Route path="/logout" element={<Logout  user={user} changeUser={changeUser} />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/projects" element={
                    <ProjectGroup/>
                }/>
                <Route path="/project">
                    <Route path=":id" element={
                        <Project user={user} changeUser={changeUser}/>
                    }/>
                    <Route index element ={
                        <Project user={user} changeUser={changeUser}/>
                    }/>
                </Route>

                <Route path="/lines/:id" element={
                    <TimetableTrainGroup/>
                }/>
                <Route path="/master_area">
                   <Route path=":id" element={
                        <MasterArea/>
                   }/>
                   <Route index element = {
                      <MasterArea/>
                   }/>
                </Route>
                <Route path="/master_scenario">
                    <Route path=":id" element={
                        <MasterScenario/>
                    }/>
                    <Route index element ={
                        <MasterScenario/>
                    }/>
                </Route>
                <Route path="/bks" element={
                    <Bks/>}>
                </Route>
                <Route path='/finve'element={<Finance/>}/>
            </Routes>
        </Layout>
    );
}


export default App;
