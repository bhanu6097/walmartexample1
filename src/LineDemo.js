import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const colors = ["#78ce90", "#b977ce", "#fac76e", "#de4d4d"];
const data = {
  datasets: [
    {
      label: "Bar Dataset",
      data: [10, 20, 30, 40],
      backgroundColor: colors,
      // this dataset is drawn below
      order: 1
    },
    {
      label: "Line Dataset",
      backgroundColor: "blue",
      pointStyle: "rect",
      showLine: false,
      pointRadius: 15,
      pointHoverRadius: 10,
      data: [15, 25, 35, 45],
      type: "line",
      // this dataset is 5rawn on top
      order: 2
    },
    {
      label: "Bar Dataset",
      data: [20, 20, 30, 40],
      // this dataset is drawn below
      order: 1
    }
  ],
  labels: ["January", "February", "March", "April"]
};
const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }
    ],
    xAxes: [
      {
        // Change here
        stacked: true,
        barPercentage: 0.1
      }
    ]
  }
};

export default class LineDemo extends Component {
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Bar ref="chart" data={data} options={options} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
