import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import {toast} from "react-toastify";

class HomeTop extends Component {

    constructor(){
        super();
        this.state={
            MenuData:[],
            SliderData:[],
        }
    }

    componentDidMount() {
        window.scroll(0,0);

        axios.get(ApiURL.SendCategoryDetails).then(response=> {
            this.setState({MenuData:response.data});

        }).catch(error=> {
            toast.error("Something Went Wrong ! Please Try Again.");

        });

        axios.get(ApiURL.SendSliderInfo).then(response=> {
            this.setState({SliderData:response.data});

        }).catch(error=> {
            toast.error("Something Went Wrong ! Please Try Again.");

        });

    }




    render() {
        return (
            <Fragment>
                <Container fluid={true} className="p-0 mt-5 overflow-hidden">
                    <Row className="mt-4">
                        <Col xl={3} lg={3} md={3}>
                            <MegaMenu data={this.state.MenuData}/>
                        </Col>

                        <Col xl={9} lg={9} md={9}>
                            <SliderHome data={this.state.SliderData}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;