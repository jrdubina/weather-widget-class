import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles/Header.scss';

class Header extends Component {
    render() {
        const weatherDetails = this.props.weatherData.weather ? this.props.weatherData?.weather[0] : undefined;

        return (
            <>
                <Row className='justify-content-center'>
                    <Col xs='auto' className='no-padding'>
                        <h1>{this.props.weatherData?.name}</h1>
                    </Col>
                    <Col xs='auto' className='no-padding'>
                        <img src={`http://openweathermap.org/img/wn/${weatherDetails?.icon}.png`} />
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <p id='weatherDescription'>{weatherDetails?.description}</p>
                </Row>
            </>
        );
    };
};

export default Header;