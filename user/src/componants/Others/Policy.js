import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser from 'react-html-parser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

class Policy extends Component {

    constructor(){
        super();
        this.state={
            policy:"",
            loaderDiv:"",
            mainDiv:"d-none",

        }

    }

    componentDidMount() {

        let SiteInfoPolicy = sessionStorage.getItem("SiteInfoPolicy");

        if (SiteInfoPolicy==null) {
            axios.get(ApiURL.SendSiteInfo).then(response=> {
                let  StatusCode=response.status;
                if (StatusCode==200){
                    let JSONData= (response.data)[0]['policy'];
                    this.setState({policy:JSONData,loaderDiv:"d-none",mainDiv:""});
                    sessionStorage.setItem("SiteInfoPolicy",JSONData);
                }else {
                    toast.error("Something Went Wrong ! Please Try Again.");

                }
            }).catch(error=> {
                toast.error("Something Went Wrong ! Please Try Again.");

            })
        }else {
            this.setState({policy:SiteInfoPolicy,loaderDiv:"d-none",mainDiv:""});
        }



    }
    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Card className={this.state.loaderDiv}>
                                <Card.Body>
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
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Card className={this.state.mainDiv}>
                                <h5 className="section-title text-center mt-3">Privacy Policy</h5>
                                <Card.Body>

                                    { ReactHtmlParser(this.state.policy) }

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <ToastContainer className="mt-5 pt-5" position="top-center" autoClose={6000}/>
                </Container>
            </Fragment>
        );
    }
}

export default Policy;