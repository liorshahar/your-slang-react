import React, { Component } from "react";
import { getAllTvShows } from "../utils/getTvShow";

class NavBar extends Component {
  state = {
    allTvShows: []
  };

  componentDidMount() {
    let jsonData = getAllTvShows();
    this.setState({ allTvShows: jsonData.responseJSON });
  }
  render() {
    const tvShows = this.state.allTvShows;
    return (
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1" />
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#.">
                מה הסלנג ש'ך
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#.">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-3"
                >
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <line x1="21" y1="21" x2="15.8" y2="15.8" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            {tvShows.map(tvShow => (
              <a key={tvShow[0]} className="p-2 text-muted" href="#.">
                {tvShow[0]}
              </a>
            ))}
          </nav>
        </div>
        <div
          className="jumbotron p-3 p-md-5 text-white rounded bg-dark"
          style={{ height: 150 }}
        >
          <div className="col-md-6 px-0 mw-100 pull-right">
            <h1 className="display-4 text-right">מה הסלנג ש'ך</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
