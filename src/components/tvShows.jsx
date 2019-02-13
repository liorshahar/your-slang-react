import React, { Component } from "react";
import { getAllTvShows } from "../utils/getTvShow";

class TvShows extends Component {
  state = {
    allTvShows: []
  };

  componentDidMount() {
    let jsonData = getAllTvShows();
    this.setState({ allTvShows: jsonData.responseJSON });
  }

  render() {
    const tvShows = this.state.allTvShows;
    const { onClickTvShow } = this.props;

    return (
      <div className="container" style={{ marginTop: 40 }}>
        <div className="row">
          {tvShows.map(tvShow => {
            console.log('"' + tvShow[2] + '"');
            return (
              <div
                key={tvShow[0]}
                className="col mb-4"
                onClick={e => onClickTvShow(e)}
                style={{ cursor: "pointer" }}
              >
                <div className="col-md-12">
                  <img
                    style={{ borderRadius: 100 }}
                    className="img-circle img-responsive"
                    src={tvShow[2]}
                    alt={tvShow[0]}
                  />
                  <h3 className="text-center">{tvShow[0]}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TvShows;
