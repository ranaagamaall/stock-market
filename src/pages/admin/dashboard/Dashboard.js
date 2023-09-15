import React, { Fragment } from "react";

import adminStatistics from "../../../assets/data/admin/adminStatistics";
import Chart from "../../../components/Chart";
import StatCard from "../../../components/StatCard";

function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap gap-8 h-fit ">
        {adminStatistics.values.map((stat, index) => (
          <StatCard stat={stat} key={index} />
        ))}
      </div>
      <div className="flex flex-wrap gap-16">
        {adminStatistics.chartData.map((chart, index) => (
          <div
            className="flex flex-wrap items-center w-full h-56 gap-4 justify-evenly"
            key={index}
          >
            <h2 className="text-2xl font-bold text-center capitalize font-main text-text w-min">
              {chart.title}
            </h2>
            <Chart
              type={chart.type}
              width="70%"
              data={chart.data}
              xKey="date"
              yKey="number"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
