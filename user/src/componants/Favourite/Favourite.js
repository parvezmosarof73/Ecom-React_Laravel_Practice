import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row, Card} from "react-bootstrap";

class Favourite extends Component {

    componentDidMount() {
        window.scroll(0,0)

    }

    render() {

        return (
            <Fragment>
                <Container  className="text-center bg-white card-body shadow-sm py-5 mt-5 BetweenTwoSection" fluid={true}>
                    <h4 className="section-title ">My Favourite Items</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row >

                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>


                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </Fragment>
        );
    }
}


export default Favourite;