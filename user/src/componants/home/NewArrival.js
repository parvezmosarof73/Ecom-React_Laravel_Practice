import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import {Container, Card, Col} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";


class NewArrival extends Component {

    constructor(props){
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);
        this.state={
            ProductData:[],
        }
    }

    componentDidMount() {
        axios.get(ApiURL.ProductListByRemark('NEW')).then((response)=> {
            this.setState({ProductData:response.data});
        }).catch(function (error) {

        });
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
            speed: 800,
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

        const MyList=this.state.ProductData;
        const MyView=MyList.map((ProductList,i)=>{
            if (ProductList.special_price==="NO") {
                return  <div className="p-2">
                    <Link to={"ProductDetails/"+ProductList.product_code }>
                        <Card className="image-box w-100 card mb-3">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <p className="product-name-on-card">{ProductList.title}</p>
                                <p className="product-price-on-card">Price : {ProductList.price} TK</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            }else {
                return  <div className="p-2">
                    <Link to={"ProductDetails/"+ProductList.product_code }>
                        <Card className="image-box w-100 card mb-3">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <p className="product-name-on-card">{ProductList.title}</p>
                                <p className="product-price-on-card">
                                    Price : <strike class="text-secondary">{ProductList.price}</strike> {ProductList.special_price} TK
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>

            }
        });

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
                                {MyView}
                            </Slider>
                        </div>
                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;