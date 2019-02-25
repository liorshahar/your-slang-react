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
    tvShowByName: {}
  };

  componentDidMount() {
    let jsonData = getAllTvShows();
    this.setState({ allTvShows: jsonData.responseJSON });
  }

  handleTvShowCLicked = tvShow => {
    let jsonData = tvShowByName(tvShow);
    let ShowByNameArr = jsonData.responseJSON;
    this.setState({ tvShowByName: ShowByNameArr[0], tableView: "byName" });
  };

  handleTop3CLicked = top3 => {
    console.log(top3);
  };

  render() {
    const { allTvShows, tableView, tvShowByName } = this.state;
    return (
      <React.Fragment>
        <NavBar tvShows={allTvShows} />
        <TvShows
          onClickTvShow={this.handleTvShowCLicked}
          onTop3Clicked={this.handleTop3CLicked}
          tvShows={allTvShows}
        />
        <Tabel
          tvShows={allTvShows}
          tableView={tableView}
          tvShowByName={tvShowByName}
        />
      </React.Fragment>
    );
  }
}

export default App;
