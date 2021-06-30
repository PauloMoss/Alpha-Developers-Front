import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css'
import Login from './Login_SignUp/Login';
import SignUp from './Login_SignUp/SignUp';

export default function App() {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
            </Switch>
        </Router>
    );
}