import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";



class ProductListByCategory extends Component {

    render() {

        const Category = this.props.Category;
        const MyList=this.props.ProductData;
        const MyView=MyList.map((ProductList, i)=>{

            if (ProductList.special_price=="NO") {
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to="/productDetails">
                        <Card className="image-box w-100 h-100 card mb-3">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <p className="product-name-on-card">{ProductList.title}</p>
                                <p className="product-price-on-card">Price : {ProductList.price} TK</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

            }else {
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to="/productDetails">
                        <Card className="image-box w-100 h-100 card mb-3">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <p className="product-name-on-card">{ProductList.title}</p>
                                <p className="product-price-on-card">
                                    Price : <strike class="text-secondary">{ProductList.price}</strike> {ProductList.special_price} TK
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
        });


        return (
            <Fragment>
                <Container fluid={true} className="text-center TopSection">
                    <h5 className="section-title mt-5">{Category}</h5>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductListByCategory;