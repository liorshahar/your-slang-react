import React, { Component } from "react";
//import { getAllTvShows } from "../utils/getTvShow";

class TvShows extends Component {
  render() {
    const { tvShows, onClickTvShow, onTop3Clicked } = this.props;

    return (
      <div className="container" style={{ marginTop: 40 }}>
        <div className="row">
          {tvShows.map(tvShow => {
            return (
              <div
                key={tvShow.item.showId}
                className="col mb-4"
                onClick={() => onClickTvShow(tvShow.item._id)}
                style={{ cursor: "pointer" }}
              >
                <div className="col-md-12">
                  <img
                    style={{ borderRadius: 100 }}
                    className="img-circle img-responsive"
                    src={tvShow.item.imgsrc}
                    alt={tvShow.item._id}
                  />
                  <h3 className="text-center">{tvShow.item._id}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="col mb-4"
          onClick={() => onTop3Clicked("top3")}
          style={{ cursor: "pointer" }}
        >
          <div className="col-md-12">
            <h3 className="text-center">TOP 3</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TvShows;
