import {Route, Routes} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from "./components/pages/Home";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";
import Layout from "./components/layout/Layout";
import Profile from "./components/user/Profile";
import AllProjects from "./components/pages/AllProjects";
import ProjectDetail from "./components/pages/ProjectDetail";
import useLocalStorage from "./services/LocalStorageHook.service";
import Authenticate from "./components/user/Authenticate";
import Lines from "./components/pages/Lines"
import MasterArea from "./components/pages/MasterArea";

function App() {
    //TODO Check if this method of user and user token can't be tricked by manipulate local storage to some input and the page gets loaded (and then redirect, but the data gets send)
    const [activeProject, changeActiveProject] = useLocalStorage('project', null);

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
                    <Authenticate user={user} changeUser={changeUser}>
                        <AllProjects activeProject={activeProject} changeActiveProject={changeActiveProject} user={user} changeUser={changeUser}/>
                    </Authenticate>
                }/>
                <Route path="/project" element={
                    <Authenticate user={user} changeUser={changeUser}>
                        <ProjectDetail activeProject={activeProject} changeActiveProject={changeActiveProject} user={user} changeUser={changeUser}/>
                    </Authenticate>
                }/>
                <Route path="/lines/:id" element={
                    <Authenticate user={user} changeUser={changeUser}>
                        <Lines/>
                    </Authenticate>
                }/>
                <Route path="/master_area">
                   <Route path=":id" element={
                       <Authenticate user={user} changeUser={changeUser}>
                           <MasterArea/>
                       </Authenticate>
                   }/>
                   <Route index element = {
                      <MasterArea/>
                   }/>
                </Route>
            </Routes>
        </Layout>
    );
}


export default App;
