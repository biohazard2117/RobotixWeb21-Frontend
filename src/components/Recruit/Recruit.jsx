import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios";
import RecruitForm from './RecruitForm';
import Signin from './Signin';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Cookies from "universal-cookie";

import api from "../../service";




const useConstrutor = (callback = () => { }) => {
    const [constructorHasRun, setConstructorStatus] = useState(false);

    if (constructorHasRun) return;
    callback();

    setConstructorStatus(true);
}


function Recruit() {
    const [user, setUserData] = useState({ loginStatus: false });
    const cookies = new Cookies();

    useConstrutor(() => {

        if (cookies.get("refresh_token")) {
            
            // let refreshToken= cookies.get('refresh_token');
            // api.post("/token/refresh/",{refresh : refreshToken}).then(response=>{
            //     console.log(response.data)
            // })

            
            setUserData({ ...user, loginStatus: true });

        }

    });



    const inputHandler = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUserData({ ...user, [key]: value })
    }


    const setToken = () => {
        let email = user.email;
        let password = user.password;

        api.post("/users/login/", { email, password }).then(response => {
            console.log(response);

            let refreshToken = response.data.tokens.refresh;
            let accessToken = response.data.tokens.access;


            cookies.set("refresh_token", refreshToken, { path: "/" });
            cookies.set("access_token", accessToken, { path: "/" });

            console.log(cookies.getAll());

            setUserData({ ...user, loginStatus: true })


        })

    }

    const logout = () => {
        let refreshToken = cookies.get("refresh_token")

        api.post("/users/logout/", { refresh: refreshToken }, { headers: { Authorization: `Bearer${cookies.get("access_token")}` } }).then((response) => {
            console.log(response)

        }).catch(err => {
            console.log(err)
        })


        cookies.remove("access_token");
        cookies.remove("refresh_token");
        setUserData({ ...user, loginStatus: false })

    }



    return (
        <BrowserRouter>

      <Switch>

        <Route path="/recruitment">
        <div>
          {user.loginStatus ? <div>Dashboard<button className="btn btn-primary" onClick={logout}>Logout</button></div> : <Signin funcHandleInput={inputHandler} funcHandleSubmit={setToken} />}
        </div>
        </Route>
        <Route path="/recruitment_form">
            <RecruitForm/>
        </Route>
        </Switch>

        </BrowserRouter>
    )
}

export default Recruit;
