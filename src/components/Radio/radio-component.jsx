import React, { Component } from 'react';
import Header from '../Layout/Header/header-component';
import Main from '../Layout/Main/main-component';
import Footer from '../Layout/Footer/footer-component';
import axios from 'axios';

export default class Radio extends Component {
  state = {
    channels: [],
  };
  componentDidMount() {
    axios.get('https://teclead.de/recruiting/radios').then((response) => {
      const radios = response.data.radios;
      //console.log(radios);
      this.setState({
        channels: radios,
      });
    });
  }
  render() {
    return (
      <div className="radio-component">
        <Header />
        <Main channels={this.state.channels} />
        <Footer />
      </div>
    );
  }
}
