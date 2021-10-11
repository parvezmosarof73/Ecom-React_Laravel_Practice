import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";


class HomeTopMobile extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="p-0 m-0 overflow-hidden">
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12}>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeTopMobile;