import React, { Component } from "react";
import { Chart } from "react-google-charts";

class Tabel extends Component {
  renderPie() {
    const pieOptions = {
      title: "כמות ציוצים לתוכנית",
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
      data.push([element.item._id, element.item.tweets]);
    });

    return (
      <div className={"container"} style={{ marginTop: 100 }}>
        <div className="App">
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

  renderBarChart() {
    const tvShowExpression = this.props.tvShowByName;
    const data1 = [];
    const charOptions = {
      chartArea: {
        left: 300
      },
      legend: { position: "none" },
      hAxis: {
        title: "כמות ציוצים",
        titleTextStyle: {
          color: "#000",
          fontName: "sans-serif",
          fontSize: 30,
          bold: true,
          italic: false
        }
      },
      vAxis: {
        title: "הביטוי",
        textStyle: {
          color: "#000",
          fontSize: 15,
          bold: true
        },
        titleTextStyle: {
          color: "#000",
          fontName: "sans-serif",
          fontSize: 30,
          bold: true,
          italic: false
        }
      }
    };

    data1.push(["", "", { role: "style" }]);
    let maxN = Math.max.apply(
      Math,
      tvShowExpression.sentences.map(function(o) {
        return o.tweets.length;
      })
    );

    console.log("----" + maxN + "----");

    tvShowExpression.sentences.forEach(element => {
      if (element.tweets.length > 0) {
        if (element.tweets.length < maxN * 0.3) {
          data1.push([element.text, element.tweets.length, "red"]);
        } else if (element.tweets.length < maxN * 0.6) {
          data1.push([element.text, element.tweets.length, "yellow"]);
        } else {
          data1.push([element.text, element.tweets.length, "green"]);
        }
      }
    });

    data1.sort((a, b) => {
      return a[1] - b[1];
    });

    return (
      <div className={"container"} style={{ marginTop: 100 }}>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data1}
          options={charOptions}
        />
      </div>
    );
  }

  render() {
    if (this.props.tableView === "allTvShow") {
      return this.renderPie();
    }
    if (this.props.tableView === "byName") {
      console.log("this.renderBarChart()");
      return this.renderBarChart();
    }
  }
}

export default Tabel;
