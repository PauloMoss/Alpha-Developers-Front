import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css'
import Login from './Login_SignUp/Login';
import SignUp from './Login_SignUp/SignUp';

import ProductsPage from './products/ProductsPage.js'
import ProductPage from './products/ProductPage.js'

export default function App() {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/products" component={ProductsPage}/>
                <Route exact path="/product/id:?" component={ProductPage}/>
            </Switch>
        </Router>
    );
}