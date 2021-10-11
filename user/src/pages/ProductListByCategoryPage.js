import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../componants/Common/NavMenuDesktop";
import NavMenuMobile from "../componants/Common/NavMenuMobile";
import FooterMobile from "../componants/Common/FooterMobile";
import FooterDesktop from "../componants/Common/FooterDesktop";
import ProductListByCategory from "../componants/ProductDetails/ProductListByCategory";
import axios from "axios";
import ApiURL from "../api/ApiURL";
import {toast} from "react-toastify";

class ProductListByCategoryPage extends Component {

    constructor({match}){
        super();
        this.state={
            Category:match.params.Category,
            ProductData:[],
        }

    }

    componentDidMount() {
        window.scroll(0,0);

        axios.get(ApiURL.ProductListByCategory(this.state.Category)).then(response=> {
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

                <ProductListByCategory Category={this.state.Category} ProductData={this.state.ProductData}/>

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

export default ProductListByCategoryPage;