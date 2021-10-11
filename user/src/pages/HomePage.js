import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../componants/home/FeaturedProducts";
import Categories from "../componants/home/Categories";
import Collection from "../componants/home/Collection";
import NewArrival from "../componants/home/NewArrival";
import HomeTop from "../componants/home/HomeTop";
import NavMenuDesktop from "../componants/common/NavMenuDesktop";
import NavMenuMobile from "../componants/common/NavMenuMobile";
import HomeTopMobile from "../componants/home/HomeTopMobile";
import FooterDesktop from "../componants/common/FooterDesktop";
import FooterMobile from "../componants/common/FooterMobile";
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