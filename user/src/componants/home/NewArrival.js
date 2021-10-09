import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import {Col, Container, Row, Card} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class NewArrival extends Component {

    constructor(props){
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);
    }

    next(){
        this.slider.slickNext();
    }

    previous(){
        this.slider.slickPrev();
    }


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            autoplaySpeed:3000,
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite:true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <Container fluid={true} className="text-center BetweenTwoSection">
                    <h5 className="section-title mt-3"> New Arrival
                        <a className="btn btn-sm site-btn mx-2" onClick={this.previous}>
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="btn btn-sm site-btn" onClick={this.next}>
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </h5>
                    <p className="section-sub-title pb-3">Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, c</p>
                        <div>
                            <Slider ref={c=>(this.slider=c)} {...settings}>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div>
                                    <Card className="image-box card mb-3">
                                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                        <Card.Body>
                                            <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                            <p className="product-price-on-card">Price : 30000 tk</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Slider>
                        </div>
                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;