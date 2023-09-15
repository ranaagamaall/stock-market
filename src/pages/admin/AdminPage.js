// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SideBar from "../../layouts/AdminSideBar/SideBar";
import Investors from "./investors/Investors";
import Stocks from "./stocks/Stocks";
import adminStatistics from "../../assets/data/admin/adminStatistics";
import Chart from "../../components/Chart";
import Dashboard from "./dashboard/Dashboard";



const getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length
const getPercentage = (arr) => ((arr[arr.length - 1] - getAverage(arr)) * 100 / getAverage(arr)).toFixed(1)



function Admin() {
  return (
    <div className="bg-primary min-w-[80vw] min-h-[100vh] text-text flex">
      <div className="flex w-full">
        <div className="min-h-full  w-[13%] md:w-[20%] min-w-fit">
          <SideBar />
        </div>
        <main className="w-[80%] flex flex-col justify-evenly p-8 gap-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/stocks" element={<Stocks />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Admin;
