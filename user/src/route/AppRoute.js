import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import HomePage from "../pages/HomePage";
import UserOnboardPage from "../pages/UserOnboardPage";
import ContactPage from "../pages/ContactPage";
import PolicyPage from "../pages/PolicyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import AboutPage from "../pages/AboutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/onboard" component={UserOnboardPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/policy" component={PolicyPage}/>
                    <Route exact path="/purchase" component={PurchasePage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/about" component={AboutPage}/>


                    <Route exact path="/productDetails" component={ProductDetailsPage}/>

                    <Route exact path="/notification" component={NotificationPage}/>
                    <Route exact path="/favourite" component={FavouritePage}/>
                    <Route exact path="/cartList" component={CartPage}/>
                    <Route exact path="/order" component={OrderPage}/>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;