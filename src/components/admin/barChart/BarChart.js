import React, { useState } from "react";
import { Chart } from "primereact/chart";
import "./BarChart.css";
import { useEffect } from "react";
const BarChart = ({ montlyUser, totalUsers }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  //   const [basicData] = useState({
  //     labels: [
  //       "JAN",
  //       "FEB",
  //       "MAR",
  //       "APR",
  //       "MAY",
  //       "JUN",
  //       "JUL",
  //       "AUG",
  //       "SEP",
  //       "OCT",
  //       "NOV",
  //       "DEC",
  //     ],

  //     datasets: [
  //       {
  //         label: "My First dataset",
  //         backgroundColor: "#42A5F5",
  //         data: montlyUser,
  //         fill: true,
  //       },
  //       // {
  //       //   label: "My Second dataset",
  //       //   backgroundColor: "#FFA726",
  //       //   data: [28, 48, 40, 19, 86, 27, 90],
  //       // },
  //     ],
  //   });

  //   const getLightTheme = () => {
  //     let basicOptions = {
  //       maintainAspectRatio: false,
  //       aspectRatio: 0.6,
  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //       },
  //       scales: {
  //         x: {
  //           ticks: {
  //             color: "#495057",
  //           },
  //           grid: {
  //             display: false,
  //           },
  //         },
  //         y: {
  //           ticks: {
  //             color: "#495057",
  //           },
  //           grid: {
  //             display: false,
  //           },
  //         },
  //       },
  //     };

  //     return {
  //       basicOptions,
  //     };
  //   };

  //   const { basicOptions, multiAxisOptions } = getLightTheme();
  useEffect(() => {
    const data = {
      labels: [
        "jan",
        "feb",
        "mar",
        "april",
        "may",
        "june",
        "july",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620, 210, 33, 100, 510, 480, 100, 5, 13],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);
  return (
    <>
      <div className="aw_line_chart_wrap">
        <div className="card border-none">
          <div className="card_Bar">
            <h5>Sales Overview</h5>
          </div>
          {/* <div className="total_posts">
            <div className="total_ d-flex justify-content-between">
              <h6>{totalUsers}</h6>
              <p>
                <span>
                  <i className="fa-solid fa-arrow-up"></i>
                </span>
                33.1%
              </p>
            </div>
            <div className="post_lastmonth">
              <p>Users</p>
              <p>Since Last Month</p>
            </div>
          </div> */}
          <Chart type="bar" data={chartData} options={chartOptions} />

          {/* <div className="monthss">
            <div className="this_month">
              <span></span>
              <p>This Month</p>
            </div>
            <div className="last_month">
              <span></span>
              <p>Last Month</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BarChart;
