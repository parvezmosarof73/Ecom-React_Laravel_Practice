import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../componants/Common/NavMenuDesktop";
import NavMenuMobile from "../componants/Common/NavMenuMobile";
import FooterMobile from "../componants/Common/FooterMobile";
import FooterDesktop from "../componants/Common/FooterDesktop";
import axios from "axios";
import ApiURL from "../api/ApiURL";
import {toast} from "react-toastify";
import ProductListBySubCategory from "../componants/ProductDetails/ProductListBySubCategory";

class ProductListBySubCategoryPage extends Component {

    constructor({match}){
        super();
        this.state={
            SubCategory:match.params.SubCategory,
            Category:match.params.Category,
            ProductData:[],
        }

    }

    componentDidMount() {
        window.scroll(0,0);

        axios.get(ApiURL.ProductListBySubCategory(this.state.Category,this.state.SubCategory)).then(response=> {
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

                <ProductListBySubCategory SubCategory={this.state.SubCategory} ProductData={this.state.ProductData}/>

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

export default ProductListBySubCategoryPage;