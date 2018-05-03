import './Home.css';

import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap/es/";

class Home extends Component {
    render() {

        function aboutHandleClick() {
            window.location = "/about"
        }

        function skillsHandleClick() {
            window.location = "/skills"
        }

        function courseHandleClick() {
            window.location = "/course"
        }

        function portfolioHandleClick() {
            window.location = "/portfolio"
        }

        return (
            <div className="Home">
                <header className="Home-header">
                    <h1 className="Home-header-title">Welcome !</h1>
                    {/*<h1 className="Home-header-subtitle">To all !</h1>*/}
                </header>
                <div className="Home-content">
                    <Grid fluid={true} className="Home-content-container">
                        <Row className="Home-content-row">
                            <Col xs={12} sm={3} md={3} className="Home-content-col">
                                <div className="Home-content-thumb" onClick={aboutHandleClick.bind(this)}>
                                    <div className="Home-content-thumb-logo">
                                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"/>
                                    </div>
                                    <div className="Home-content-thumb-title">
                                        <p>ABOUT</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={3} md={3} className="Home-content-col">
                                <div className="Home-content-thumb" onClick={skillsHandleClick.bind(this)}>
                                    <div className="Home-content-thumb-logo">
                                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"/>
                                    </div>
                                    <div className="Home-content-thumb-title">
                                        <p>SKILLS</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={3} md={3} className="Home-content-col">
                                <div className="Home-content-thumb" onClick={courseHandleClick.bind(this)}>
                                    <div className="Home-content-thumb-logo">
                                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"/>
                                    </div>
                                    <div className="Home-content-thumb-title">
                                        <p>COURSE</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={3} md={3} className="Home-content-col">
                                <div className="Home-content-thumb" onClick={portfolioHandleClick.bind(this)}>
                                    <div className="Home-content-thumb-logo">
                                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"/>
                                    </div>
                                    <div className="Home-content-thumb-title">
                                        <p>PORTFOLIO</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Home;
