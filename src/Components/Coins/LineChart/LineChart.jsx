import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Still necessary for the charts to work
import { convertNum } from "../../../Functions/convertNumbers";

function LineChart({ chartData, multiAxis, priceType }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false, // Display legend if multiAxis is true
      },
    },
    responsive: true,
    interaction: {
      mode: "index", // Same as before
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if(priceType === "prices")
              return '$' + value.toLocaleString();
            else 
              return "$" + convertNum(value.toLocaleString())
          }
        }
      }
    }
    // scales: {
    //   crypto1: {
    //     type: "linear", // Specify the type of scale for the first axis
    //     position: "left", // The first dataset will map to the left y-axis
    //   },
    //   crypto2: multiAxis
    //     ? {
    //         type: "linear", // Specify the type for the second axis as well
    //         position: "right", // The second dataset maps to the right y-axis
    //         grid: {
    //           drawOnChartArea: false, // Prevents grid lines from overlapping with the left axis
    //         },
    //       }
    //     : undefined, // If multiAxis is false, we don’t need this axis
    // },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
