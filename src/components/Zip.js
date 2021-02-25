import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles/Zip.scss';

class Zip extends Component {
    constructor() {
        super();
        this.zipInput = React.createRef();
    }

     _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.onZipChange(this.zipInput.current.value);
        };
    };

    render() {
        console.log(this.props)
        return (
            <>
                <Row className='justify-content-center'>
                    <Col xs='auto' className='zipDiv'>
                        <p id='zipCodeLabel'>Zip Code:</p>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xs='auto' className='no-padding'>
                        <input type='text' ref={zip => this.zip = zip} id='zipCodeInput' defaultValue={this.props.zipCode} ref={this.zipInput} onKeyDown={this._handleKeyDown} />
                    </Col>
                    <Col xs='auto'>
                        <button type='button' id='zipCodeButton' onClick={() => this.props.onZipChange(this.zipInput.current.value)}>Update</button>
                    </Col>
                </Row>
            </>
        );
    };
};

export default Zip;