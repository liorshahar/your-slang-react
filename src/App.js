import React, { Component } from "react";
import NavBar from "./components/navBar";
import TvShows from "./components/tvShows";
import Tabel from "./components/tabel";
import { getAllTvShows } from "./utils/getTvShow";
import { tvShowByName } from "./utils/getTvShow";
import "./App.css";

class App extends Component {
  state = {
    allTvShows: [],
    tableView: "allTvShow",
    tvShowByNameArr: []
  };
  componentDidMount() {
    let jsonData = getAllTvShows();
    this.setState({ allTvShows: jsonData.responseJSON });
  }

  handleTvShowCLicked = event => {
    let parentDiv = event.target.parentNode;
    let tvShowName = parentDiv.children[1].innerText;
    console.log("Tv Show Name: " + tvShowName);
    let jsonData = tvShowByName(tvShowName);
    let ShowByNameArr = jsonData.responseJSON;
    this.setState({ tvShowByNameArr: ShowByNameArr, tableView: "byName" });
  };

  render() {
    const { allTvShows, tableView, tvShowByNameArr } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <TvShows onClickTvShow={this.handleTvShowCLicked} />
        <Tabel
          tvShows={allTvShows}
          tableView={tableView}
          tvShowByName={tvShowByNameArr}
        />
      </React.Fragment>
    );
  }
}

export default App;
