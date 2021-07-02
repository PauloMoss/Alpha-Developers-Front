import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import GlobalStyle from "../styles/GlobalStyles";
import '../styles/reset.css'
import UserContext from "../contexts/UserContext";
import CartContext from "../contexts/CartContext";
import Header from "./Header";
import Login from './Login_SignUp/Login';
import SignUp from './Login_SignUp/SignUp';
import ProductsPage from './products/ProductsPage.js'
import ProductPage from './products/ProductPage.js'
import CheckOut from "./CheckOut/CheckOut";

export default function App() {

    const alreadyLoggedIn = localStorage.getItem("lastLogin");
    const[userProfile, setUserProfile] = useState(alreadyLoggedIn && JSON.parse(alreadyLoggedIn));
    const[userCart, setUserCart] = useState([{productId:3, quantity: 1}]);

    return(
        <Router>
            <UserContext.Provider value={{ userProfile, setUserProfile }} >
            <CartContext.Provider value={{userCart,setUserCart}}>
            <GlobalStyle />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/products">
                    <Header />
                    <ProductsPage />
                </Route>
                <Route exact path="/product/id:?">
                    <Header />
                    <ProductPage />
                </Route>
                <Route exact path="/checkout">
                    <Header />
                    <CheckOut />
                </Route>
            </Switch>
            </CartContext.Provider>
            </UserContext.Provider>
        </Router>
    );
}