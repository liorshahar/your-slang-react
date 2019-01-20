import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Tabel extends Component {
  render() {
    const pieOptions = {
      title: "",
      is3D: true,
      slices: [
        {
          color: "#2BB673"
        },
        {
          color: "#d91e48"
        },
        {
          color: "#007fad"
        },
        {
          color: "#e9a227"
        }
      ],
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: "233238",
          fontSize: 22
        }
      },
      tooltip: {
        showColorCode: true
      },
      chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "80%"
      },
      fontName: "Roboto"
    };
    const { tvShows } = this.props;
    let data = [];
    data.push(["שם התוכנית", "כמות ציוצים"]);
    tvShows.forEach(element => {
      data.push([...element.splice(0, 2)]);
    });

    data.sort((a, b) => {
      return a[1] - b[1];
    });
    console.log(data);
    return (
      <div className={"container"} style={{ marginTop: 100 }}>
        <div className="App">
          {/* <Chart chartType="BarChart" width="100%" height="400px" data={data} /> */}
          <Chart
            chartType="PieChart"
            data={data}
            options={pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"700px"}
            legend_toggle
          />
        </div>
      </div>
    );
  }
}

export default Tabel;
