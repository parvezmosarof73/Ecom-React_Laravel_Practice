import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import MegaMenu from "../home/MegaMenu";
import MegaMenuMobile from "../home/MegaMenuMobile";
import {Link} from "react-router-dom";

class NavMenuMobile extends Component {

    constructor() {
        super();
        this.state={
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose"
        }
    }


    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }

    ContentOverlayClickHandler=()=>{
        this.SideNavOpenClose();
    }



    SideNavOpenClose=()=>{
        let SideNavState= this.state.SideNavState;
        let ContentOverState= this.state.ContentOverState;
        if(SideNavState==="sideNavOpen"){
            this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
        }
        else{
            this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
        }
    }




    render() {
        return (
            <Fragment>
                <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <a onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                    <Link to="/cartList" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                    <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                    <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                    <Link className="btn"><i className="fa h4 fa-search"></i>  </Link>
                </Navbar>
                <div  className={this.state.SideNavState}>
                    <Link to="/" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></Link>
                    <hr/>
                    <MegaMenuMobile/>
                </div>

                <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>

                </div>

            </Fragment>

        );
    }
}

export default NavMenuMobile;