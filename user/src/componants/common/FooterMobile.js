import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class FooterMobile extends Component {
    render() {
        return (
            <Fragment>
                <div className="card">
                    <Container fluid={true}>
                        <Row className="px-0 my-5">
                            <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                                <p>Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207, 01774688159 (Help-Line), Engr.Rabbil@yahoo.com</p>
                                
                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                                <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                                <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
                            </Col>
                            <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <Link to="/about" className="footer-link">About Us</Link><br/>
                                <Link to="/contact" className="footer-link">Contact Us</Link><br/>

                            </Col>
                            <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <a  className="footer-link">How To Purchase</a><br/>
                                <a className="footer-link">Privacy Policy</a><br/>
                                <a className="footer-link">Refund Policy</a><br/>

                            </Col>
                            <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                                <a><img className="" src="Images/apple.png"/></a><br/>
                                <a><img className="mt-2" src="Images/playstore.png"/></a>

                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className="pt-3 pb-1 bg-dark">
                        <Container>
                            <Row className="px-0">
                                <h6 className="text-white">WE DELIVER IN</h6>
                                <p className="footer-text text-white">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FooterMobile;