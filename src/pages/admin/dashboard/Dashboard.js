import React, { Fragment } from "react";

import adminStatistics from "../../../assets/data/admin/adminStatistics";
import Chart from "../../../components/Chart";
import StatCard from "../../../components/StatCard";

function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8 h-fit">
        {adminStatistics.values.map((stat, index) => (
            <StatCard stat={stat} />
        ))}
      </div>
      {adminStatistics.chartData.map((chart, index) => (
        <div
          className="flex flex-wrap items-center w-full h-56 justify-evenly"
          key={index}
        >
          <h2 className="text-2xl font-bold text-center capitalize font-main text-text w-min">
            {chart.title}
          </h2>
          <Chart
            type={chart.type}
            width="60%"
            data={chart.data}
            xKey="date"
            yKey="number"
          />
        </div>
      ))}
    </>
  );
}

export default Dashboard;
