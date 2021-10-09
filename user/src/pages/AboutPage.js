import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../componants/common/NavMenuDesktop";
import NavMenuMobile from "../componants/common/NavMenuMobile";
import FooterMobile from "../componants/common/FooterMobile";
import FooterDesktop from "../componants/common/FooterDesktop";
import About from "../componants/Others/About";

class AboutPage extends Component {

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

                <About/>

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

export default AboutPage;