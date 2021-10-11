import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../componants/Common/NavMenuDesktop";
import NavMenuMobile from "../componants/Common/NavMenuMobile";
import FooterMobile from "../componants/Common/FooterMobile";
import FooterDesktop from "../componants/Common/FooterDesktop";
import CartList from "../componants/Cart/CartList";

class CartPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>

                <div className="Mobile">
                    <NavMenuMobile/>
                </div>

                <CartList/>

                <div className="Mobile">
                    <FooterMobile/>
                </div>
                <div className="Desktop">
                    <FooterDesktop/>
                </div>
            </Fragment>
        );
    }
}

export default CartPage;