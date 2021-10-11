import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";

class SliderHome extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const SliderList=this.props.data;

        const SliderView= SliderList.map((SliderList,i)=>{
            return <div className="container-fluid m-0 p-0 overflow-hidden w-100 shadow-sm">
                <div style={{backgroundColor:SliderList.bg_color}}>
                    <div className="m-0 p-0 text-center">
                        <div className="row card-body">
                            <div className="col-md-6 slider-title-div animated slideInDown">
                                <h1 style={{color:SliderList.text_color}} className="slider-title">{SliderList.title}</h1>
                                <p style={{color:SliderList.text_color}} className="slider-sub-title">{SliderList.sub_title}</p>
                                <Link to={"ProductDetails/"+SliderList.product_code } className="btn site-btn px-5">More Info</Link>
                            </div>
                            <div className="col-md-6 animated slideInDown">
                                <img className="slider-img" src={SliderList.image} alt="slider img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        });



        return (
            <Fragment>
                  <Slider {...settings}>
                      {SliderView}
                  </Slider>
            </Fragment>
        );
    }
}

export default SliderHome;