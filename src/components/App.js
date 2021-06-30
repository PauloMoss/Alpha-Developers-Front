import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css'

import ProductsPage from './products/ProductsPage.js'
import ProductPage from './products/ProductPage.js'

export default function App() {
    return(
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    "App"
                </Route>
                <Route exact path="/products" component={ProductsPage}/>
                <Route exact path="/product/id:?" component={ProductPage}/>
            </Switch>
        </Router>
    );
}