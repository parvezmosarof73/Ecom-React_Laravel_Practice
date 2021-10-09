import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";

class HomeTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="p-0 mt-5 overflow-hidden">
                    <Row className="mt-4">
                        <Col xl={3} lg={3} md={3} sm={3}>
                            <MegaMenu/>
                        </Col>

                        <Col xl={9} lg={9} md={9} sm={9}>
                            <SliderHome/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTop;