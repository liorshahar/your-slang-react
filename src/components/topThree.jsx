import React, { Component } from "react";
import { top3tvShow } from "../utils/getTvShow";
import { Chart } from "react-google-charts";

class TopThree extends Component {
  state = {
    top3: {},
    first: 0,
    second: 0,
    third: 0,
    displayGauge: false
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
              onMouseEnter={() => {
                this.setState({ displayGauge: true });
              }}
            >
              ...והזוכים הם
            </a>
          </div>
        </div>
        <div>{this.state.displayGauge ? this.renderGauge() : <div />}</div>
      </div>
    );
  }

  renderGauge() {
    if (!this.state.top3.length) {
      return <div />;
    }
    return (
      <div>
        <Chart
          chartType="Gauge"
          loader={<div>Loading Chart</div>}
          data={[
            ["Label", "Value"],
            [this.state.top3[0]._id.sentences, this.state.top3[0]._id.tweets],
            [this.state.top3[1]._id.sentences, this.state.top3[1]._id.tweets],
            [this.state.top3[2]._id.sentences, this.state.top3[2]._id.tweets]
          ]}
          options={{
            width: "100%",
            height: 600,
            redFrom: 0,
            redTo: 66,
            yellowFrom: 66,
            yellowTo: 122,
            greenFrom: 122,
            greenTo: 200,
            minorTicks: 10,
            majorTicks: [0, 200],
            radius: 30,
            max: 200,
            min: 0
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export default TopThree;
