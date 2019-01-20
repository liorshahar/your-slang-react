import React, { Component } from "react";
import NavBar from "./components/navBar";
import TvShows from "./components/tvShows";
import Tabel from "./components/tabel";
import { getAllTvShows } from "./utils/getTvShow";
import $ from "jquery";

import "./App.css";

class App extends Component {
  state = {
    tvShows: []
  };
  componentDidMount() {
    let jsonData = getAllTvShows();
    this.setState({ tvShows: jsonData.responseJSON });
  }

  handleTvShowCLicked = event => {
    let parentDiv = event.target.parentNode;
    let tvShowName = parentDiv.children[1].innerText;
    console.log("Tv Show Name: " + tvShowName);
  };

  render() {
    const { tvShows } = this.state;
    return (
      <React.Fragment>
        <NavBar tvShows={tvShows} />
        <TvShows tvShows={tvShows} onClickTvShow={this.handleTvShowCLicked} />
        <Tabel tvShows={tvShows} />
      </React.Fragment>
    );
  }
}

export default App;
