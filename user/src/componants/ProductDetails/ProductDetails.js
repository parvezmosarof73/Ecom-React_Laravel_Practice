import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class ProductDetails extends Component {


    render() {

        let ProductData = this.props.ProductData;
        let title = ProductData['ProductList'][0]['title'];
        let image = ProductData['ProductList'][0]['image'];
        let img1 = ProductData['ProductDetails'][0]['img1'];
        let img2 = ProductData['ProductDetails'][0]['img2'];
        let img3 = ProductData['ProductDetails'][0]['img3'];
        let img4 = ProductData['ProductDetails'][0]['img4'];



        return (
            <Fragment>
                <Container  className="BetweenTwoSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white pb-3 mt-5" md={12} lg={12} sm={12} xs={12}>
                            <Row>
                                <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                    <img className="w-100" src={image}/>
                                    <Container  className="my-3">
                                        <Row>
                                            <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                                                <img className="w-100" src={img1}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img className="w-100" src={img2}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img className="w-100" src={img3}/>
                                            </Col>
                                            <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                <img className="w-100" src={img4}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                    <h5 className="Product-Name"></h5>
                                    <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive Collectio</h6>
                                    <div className="input-group">
                                        <div className="Product-price-card d-inline ">Reguler Price 200</div>
                                        <div className="Product-price-card d-inline ">50% Discount</div>
                                        <div className="Product-price-card d-inline ">New Price 100</div>
                                    </div>
                                    <h6 className="mt-2">Choose Color</h6>
                                    <div className="input-group">
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">Black</label>
                                        </div>
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">Green</label>
                                        </div>
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">Red</label>
                                        </div>
                                    </div>

                                    <h6 className="mt-2">Choose Size</h6>
                                    <div className="input-group">
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">X</label>
                                        </div>
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">XX</label>
                                        </div>
                                        <div className="form-check mx-1">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                            <label className="form-check-label" htmlFor="exampleRadios1">XXXX</label>
                                        </div>
                                    </div>

                                    <h6 className="mt-2">Quantity</h6>
                                    <input  className="form-control text-center w-50" type="number" />

                                    <div className="input-group mt-3">
                                        <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                        <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">DETAILS</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                                </Col>

                                <Col className="" md={6} lg={6} sm={12} xs={12}>
                                    <h6 className="mt-2">REVIEWS</h6>
                                    <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                    <p className=" p-0 m-0"><span className="Review-Title">Rabbil Hasan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ProductDetails;