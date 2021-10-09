import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card} from "react-bootstrap";

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center card">
                    <h5 className="section-title mt-3">Special Collection</h5>
                    <p className="section-sub-title pb-3">Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, c</p>

                    <Row>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card mb-3">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                    <p className="product-price-on-card">Price : 30000 tk</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card mb-3">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                    <p className="product-price-on-card">Price : 30000 tk</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card mb-3">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                    <p className="product-price-on-card">Price : 30000 tk</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card mb-3">
                                <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg"/>
                                <Card.Body>
                                    <p className="product-name-on-card">Asus Lorem ipsum dolor sit amet. sint!</p>
                                    <p className="product-price-on-card">Price : 30000 tk</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;