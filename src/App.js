import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import api from "./service"
import Main from "./components/Main.jsx"
import About from "./components/About.jsx"
import Events from "./components/Events.jsx"
import History from "./components/History.jsx"
import Pricing2 from "./components/Pricing2"
import Team from "./components/Team";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Signin from "./components/Recruit/Signin.jsx";
import Recruit from "./components/Recruit/Recruit.jsx";
import Docs from "./components/Docs.jsx";
import config from "react-reveal/globals";
import Logosldier from "./components/Logoslider";
import Alumni from "./components/Alumni";

config({ ssrFadeout: true });




// const cookies = new Cookies()
// function renewUserToken() {
//   return new Promise((resolve, reject) => {
//     const refreshToken = cookies.get('refresh_token')
//     return api.post('/token/refresh/', { 'refresh': refreshToken })
//       .then((response) => {
//         resolve(response.data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// api.interceptors.response.use(
//   response => {
//     console.log(response)
//     return response;
//   },
//   error => {
//     if (error.response && error.response.status === 401) {
//       // Set Failed Request
//       let failedRequest = error.config;

//       //Method to get new token
//       return renewUserToken().then(response => {
//         // Set axios instance header
//         api.defaults.headers['Authorization'] = 'Bearer ' + response['access'];

//         // Set failed request header
//         failedRequest.headers['Authorization'] = 'Bearer ' + response['access'];

//         //Set cookie
//         cookies.set('token', response['access'], { path: '/' })

//         //Retry failed request
//         return api.request(failedRequest);
//       });
//     }
//     throw error;
//   },
// );


// api.interceptors.request.use(request => {
//   console.log(request);
//   // if (cookies.get("refresh_token")) {
//   //   request.headers.Authorization = `Bearer${cookies.get("access_token")}`

//   // }
//   return request;
// }

// )



function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/recruitment">
          <Recruit/>
        </Route>

        <Route path="/alumni">
          <Alumni/>
        </Route>


        <Route path="/">
          <Main />
          <About />
          <Events />
  
          <Pricing2 /> 
          <Team />
          <Logosldier/>
          <Contact />
          <Docs/>
          <Footer />
           {/* <Signin/>  */}

        </Route>


      </Switch>

    </BrowserRouter>
  );
}

export default App;
