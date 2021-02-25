import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './styles/Temperatures.scss';

class Temperatures extends Component {    
    formatTemp = (temp) => {
        return `${Math.round(temp)}\u00b0`;
    }

    render() {
        return (
            <>
                <Row className='justify-content-center'>
                    <p id='temp'>{this.formatTemp(this.props.weatherData?.main?.temp)}</p>
                </Row>
                <Row className='justify-content-center'>
                    <p className='highLowTemps'>{this.formatTemp(this.props.weatherData?.main?.temp_min)}</p>
                    <p className='highLowTemps'>{this.formatTemp(this.props.weatherData?.main?.temp_max)}</p>
                </Row>
            </>
        );
    };
};


export default Temperatures;