import React, {Component, Fragment} from 'react';
import {Col, Container, Row,Card} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";


class Categories extends Component {

    constructor(){
        super();
        this.state={
            MenuData:[],
        }
    }

    componentDidMount() {
        axios.get(ApiURL.SendCategoryDetails).then(response=> {
            this.setState({MenuData:response.data});

        }).catch(error=> {
            toast.error("Something Went Wrong ! Please Try Again.");

        })

    }

    render() {
        const MyList=this.state.MenuData;
        const MyView=MyList.map((CategoryList,i)=> {
            return <Col key={i.toString()} className="p-1" xl={2} lg={2} md={2} sm={4} xs={6}>
                <Link to={"ProductListByCategory/"+CategoryList.ParentCategoryName}>
                    <Card className="card">
                        <img src={CategoryList.ParentCategoryImage}/>
                        <Card.Body>
                            <p className="category-name">{CategoryList.ParentCategoryName}</p>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        });


        return (
            <Fragment>
                <Container fluid={true} className="text-center">
                    <h5 className="section-title mt-3">Categories</h5>
                    <p className="section-sub-title pb-3">Lorem ipsum dolor sit amet, cLorem ipsum dolor sit amet, c</p>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );



    }
}

export default Categories;