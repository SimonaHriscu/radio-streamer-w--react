import React, { Component } from 'react';
import Header from '../Layout/Header/header-component';
import Main from '../Layout/Main/main-component';
import Footer from '../Layout/Footer/footer-component';
import axios from 'axios';

export default class Radio extends Component {
  state = {
    channels: [],
    currentIndex: 0,
    name: null,
    showTitle: false,
  };
  componentDidMount() {
    axios.get('https://teclead.de/recruiting/radios').then((response) => {
      const radios = response.data.radios;
      this.setState({
        channels: radios,
      });
    });
  }
  updateEverythingHandler = (props) => {
    console.log(props.id);
    this.setState({
      currentIndex: props.id,
      name: props.name,
      showTitle: true,
    });
  };
  render() {
    console.log(this.state.currentIndex);
    return (
      <div className="radio-component">
        <Header />
        <Main
          channels={this.state.channels}
          click={this.updateEverythingHandler}
          index={this.state.currentIndex}
        />
        <Footer showTitle={this.state.showTitle} name={this.state.name} />
      </div>
    );
  }
}
