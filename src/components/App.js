import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css'

export default function App() {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    "App"
                </Route>
            </Switch>
        </Router>
    );
}