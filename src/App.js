import React, { Component } from 'react';
import Axios from './services/axiosService';
import Header from './components/Header';
import Temperatures from './components/Temperatures';
import Zip from './components/Zip';
import { Container } from 'react-bootstrap'
import './App.scss';


class App extends Component {
  constructor() {
    super();
    this.axios = new Axios();
    this.state = {
      weather: {},
      zipCode: '10036'
    }
  }

  componentDidMount = () => {
    this.axios.getWeather(this.state.zipCode)
      .then(response => {
        this.setState({
            weather: response.data
          })
      });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(this.state.zipCode !== prevState.zipCode) {
      this.axios.getWeather(this.state.zipCode)
        .then(response => {
          this.setState({
              weather: response.data
            })
        });
    }
  }

  handleUpdatekEvent = (zipData) => {
    this.setState({
        zipCode: zipData
      });
  };

  render() {
    console.log(this.state)
    return (
      <Container>
        <Header weatherData={this.state.weather} />
        <Temperatures weatherData={this.state.weather} />
        <hr />
        <Zip zipCode={this.state.zipCode} onZipChange={this.handleUpdatekEvent.bind(this)} />
      </Container>
    );
  };
}

export default App;
