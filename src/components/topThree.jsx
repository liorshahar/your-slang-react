import React, { Component } from "react";
import { top3tvShow } from "../utils/getTvShow";
import { Chart } from "react-google-charts";

class TopThree extends Component {
  state = {
    top3: {},
    first: 0,
    second: 0,
    third: 0,
    intervalID: null
  };
  componentDidMount() {
    let jsonData = top3tvShow();
    this.setState({ top3: jsonData.responseJSON });
  }
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron p-3 p-md-5 text-white rounded bg-dark"
          style={{ height: 100, lineHeight: 3 }}
        >
          <div className="col-md-6 px-0 mw-100 pull-right">
            <a
              className="display-4 text-right title"
              href="#."
              style={{ lineHeight: 0.1 }}
            >
              ...והזוכים הם
            </a>
          </div>
        </div>
        <div>{this.renderGauge()}</div>
      </div>
    );
  }

  renderGauge() {
    if (!this.state.top3.length) {
      return <div />;
    }
    return (
      <Chart
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ["Label", "Value"],
          ["Memory", 150],
          ["CPU", 100],
          ["Network", 100]
        ]}
        options={{
          width: 800,
          height: 400,
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5
        }}
        rootProps={{ "data-testid": "1" }}
      />
    );
  }
}

export default TopThree;
