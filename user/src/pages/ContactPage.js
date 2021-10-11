import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../componants/Common/NavMenuDesktop";
import NavMenuMobile from "../componants/Common/NavMenuMobile";
import FooterMobile from "../componants/Common/FooterMobile";
import FooterDesktop from "../componants/Common/FooterDesktop";
import Contact from "../componants/Common/Contact";

class ContactPage extends Component {

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

                <Contact/>

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

export default ContactPage;