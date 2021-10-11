import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../componants/Common/NavMenuDesktop";
import NavMenuMobile from "../componants/Common/NavMenuMobile";
import FooterMobile from "../componants/Common/FooterMobile";
import FooterDesktop from "../componants/Common/FooterDesktop";
import ProductDetails from "../componants/ProductDetails/ProductDetails";
import SuggestedProduct from "../componants/ProductDetails/SuggestedProduct";
import axios from "axios";
import ApiURL from "../api/ApiURL";
import {toast} from "react-toastify";

class ProductDetailsPage extends Component {

    constructor({match}){
        super();
        this.state={
            code:match.params.code,
            Productdata:[],
            isLoading:"BetweenToSection"
        }

    }

    componentDidMount() {
        window.scroll(0,0)

        axios.get(ApiURL.ProductDetails(this.state.code)).then(response=> {
            this.setState({ProductData:response.data});

        }).catch(error=> {
            toast.error("Something Went Wrong ! Please Try Again.");

        })
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

                <ProductDetails/>
                <SuggestedProduct/>

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

export default ProductDetailsPage;