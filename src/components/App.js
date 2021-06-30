import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css'
import UserContext from "../contexts/UserContext";
import Login from './Login_SignUp/Login';
import SignUp from './Login_SignUp/SignUp';

export default function App() {

    const alreadyLoggedIn = localStorage.getItem("lastLogin");
    const[userProfile, setUserProfile] = useState(alreadyLoggedIn && JSON.parse(alreadyLoggedIn));

    return(
        <Router>
            <UserContext.Provider value={{ userProfile, setUserProfile }} >
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
            </Switch>
            </UserContext.Provider>
        </Router>
    );
}