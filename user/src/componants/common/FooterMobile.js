import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser from 'react-html-parser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

class FooterMobile extends Component {

    constructor(){
        super();
        this.state={
            footerData:"",
            androidLink:"",
            iosLink:"",
            facebookLink:"",
            twitterLink:"",
            instagramLink:"",
            address:"",
            aboutCompany:"",
            deliveryNotice:"",
            loaderDiv:"",
            mainDiv:"d-none",

        }

    }

    componentDidMount() {

        let SiteInfoFooter = sessionStorage.getItem("SiteInfoFooter");

        if (SiteInfoFooter==null) {
            axios.get(ApiURL.SendSiteInfo).then(response=> {
                let  StatusCode=response.status;
                if (StatusCode==200){
                    let JSONData= (response.data)[0];
                    this.setState({
                        androidLink:JSONData['android_app_link'],
                        iosLink:JSONData['ios_app_link'],
                        facebookLink:JSONData['facebook_link'],
                        twitterLink:JSONData['twitter_link'],
                        instagramLink:JSONData['instagram_link'],
                        address:JSONData['address'],
                        aboutCompany:JSONData['about_company'],
                        deliveryNotice:JSONData['delivery_notice'],
                        loaderDiv:"d-none",
                        mainDiv:"",
                    });
                    sessionStorage.setItem("SiteInfoFooter",JSON.stringify(JSONData));
                }else {
                    toast.error("Something Went Wrong ! Please Try Again.");

                }
            }).catch(error=> {
                toast.error("Something Went Wrong ! Please Try Again.");

            })
        }else {
            let footerDataJSON=JSON.parse(SiteInfoFooter)
            this.setState({
                footerData:SiteInfoFooter,
                androidLink:footerDataJSON['android_app_link'],
                iosLink:footerDataJSON['ios_app_link'],
                facebookLink:footerDataJSON['facebook_link'],
                twitterLink:footerDataJSON['twitter_link'],
                instagramLink:footerDataJSON['instagram_link'],
                address:footerDataJSON['address'],
                aboutCompany:footerDataJSON['about_company'],
                deliveryNotice:footerDataJSON['delivery_notice'],
                loaderDiv:"d-none",
                mainDiv:"",

            });
        }



    }




    render() {
        return (
            <Fragment>
                <div className="card">
                    <div className={this.state.loaderDiv}>
                        <div className="ph-item">
                            <div className="ph-col-12">
                                <div className="ph-row">
                                    <div className="ph-col-12"></div>
                                    <div className="ph-col-12"></div>
                                    <div className="ph-col-12"></div>
                                    <div className="ph-col-12"></div>
                                    <div className="ph-col-12"></div>
                                    <div className="ph-col-10"></div>
                                    <div className="ph-col-8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.mainDiv}>
                        <Container fluid={true}>
                            <Row className="px-0 my-5">
                                <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                    <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                                    <p> { ReactHtmlParser(this.state.address)}</p>

                                    <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                    <a target="_blank" href={this.state.facebookLink}><i className="fab m-1 h4 fa-facebook"></i></a>
                                    <a target="_blank" href={this.state.instagramLink}><i className="fab m-1 h4 fa-instagram"></i></a>
                                    <a target="_blank" href={this.state.twitterLink}><i className="fab m-1 h4 fa-twitter"></i></a>
                                </Col>
                                <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                    <h5 className="footer-menu-title">THE COMPANY</h5>
                                    <Link to="/about" className="footer-link">About Us</Link><br/>
                                    <Link to="/contact" className="footer-link">Contact Us</Link><br/>

                                </Col>
                                <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                    <h5 className="footer-menu-title">MORE INFO</h5>
                                    <Link to="/purchase" className="footer-link">How To Purchase</Link><br/>
                                    <Link to="/policy" className="footer-link">Privacy Policy</Link><br/>
                                    <Link to="/refund" className="footer-link">Refund Policy</Link><br/>

                                </Col>
                                <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                    <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                                    <a target="_blank" href={this.state.iosLink}><img className="" src="../../assets/images/appstore.png"/></a><br/>
                                    <a target="_blank" href={this.state.androidLink}><img className="mt-2" src="../../assets/images/playstore.png"/></a>

                                </Col>
                            </Row>
                        </Container>
                        <Container fluid={true} className="pt-3 pb-1 bg-dark">
                            <Container>
                                <Row className="px-0">
                                    <h6 className="text-white">WE DELIVER IN</h6>
                                    <p className="footer-text text-white">{ ReactHtmlParser(this.state.deliveryNotice)} </p>
                                </Row>
                            </Container>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FooterMobile;