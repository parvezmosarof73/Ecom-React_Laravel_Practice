import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../componants/Home/FeaturedProducts";
import Categories from "../componants/Home/Categories";
import Collection from "../componants/Home/Collection";
import NewArrival from "../componants/Home/NewArrival";
import HomeTop from "../componants/Home/HomeTop";
import NavMenuDesktop from "../componants/Common/NavMenuDesktop";
import NavMenuMobile from "../componants/Common/NavMenuMobile";
import HomeTopMobile from "../componants/Home/HomeTopMobile";
import FooterDesktop from "../componants/Common/FooterDesktop";
import FooterMobile from "../componants/Common/FooterMobile";
import axios from 'axios';
import ApiURL from '../api/ApiURL';

class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0)
        this.GetVisitorDetails();

    }

    GetVisitorDetails=()=>{
        axios.get(ApiURL.VisitorDetails).then().catch()

    }


    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                    <HomeTop/>
                </div>

                <div className="Mobile">
                    <NavMenuMobile/>
                    <HomeTopMobile/>
                </div>



                <NewArrival/>
                <FeaturedProducts/>
                <Collection/>
                <Categories/>


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

export default HomePage;