import React, {Component, Fragment} from 'react';
import FooterMobile from "../componants/Common/FooterMobile";
import FooterDesktop from "../componants/Common/FooterDesktop";
import NavMenuDesktop from "../componants/Common/NavMenuDesktop";
import NavMenuMobile from "../componants/Common/NavMenuMobile";
import UserOnboard from "../componants/Common/UserOnboard";

class UserOnboardPage extends Component {

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

                <UserOnboard/>

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

export default UserOnboardPage;