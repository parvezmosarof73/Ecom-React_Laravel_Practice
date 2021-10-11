import React, {Component, Fragment} from 'react';
import {Col, Container, Row, Card} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {Link} from "react-router-dom";

class Collection extends Component {

    constructor(){
        super();
        this.state={
            ProductData:[],
        }
    }

    componentDidMount() {
        axios.get(ApiURL.ProductListByRemark('COLLECTION')).then((response)=> {
            this.setState({ProductData:response.data});
        }).catch(function (error) {

        });
    }

    render() {
        const MyList=this.state.ProductData;
        const MyView=MyList.map((ProductList,i)=>{
            if (ProductList.special_price==="NO") {
                return <Col className="p-1" key={1} xl={2} lg={2} md={3} sm={6} xs={6}>
                    <Link to={"ProductDetails/"+ProductList.product_code }>
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
                return <Col className="p-1" key={1} xl={2} lg={2} md={3} sm={6} xs={6}>
                    <Link to={"ProductDetails/"+ProductList.product_code }>
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
                <Container fluid={true} className="text-center card">
                    <h5 className="section-title mt-3">Special Collection</h5>
                    <p className="section-sub-title pb-3">Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, c</p>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;