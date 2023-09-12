// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SideBar from "../../layouts/AdminSideBar/SideBar";
import Investors from "./investors/Investors";
import Stocks from "./stocks/Stocks";
import adminStatistics from "../../assets/data/admin/adminStatistics";

function Admin() {
  return (
    <div className="bg-primary w-[100vw] h-[100vh] text-text flex">
      <div className="w-full flex gap-10">
        <div className="h-full w-[20%] ">
          <SideBar />
        </div>
        <div class="w-[70%] h-12 grid grid-cols-12 gap-6 mt-5">
        {adminStatistics.values.map((stat) => (

          <a
            class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
            href="#"
          >
            <div class="p-5">
              <div class="flex justify-between">
                <img src={stat.icon} alt='icon' className="w-[2.5rem]"/>
                <div class="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                  <span class="flex items-center">{stat.number}</span>
                </div>
              </div>
              <div class="ml-2 w-full flex-1">
                <div>
                  <div class="mt-3 text-3xl font-bold leading-8">4.510</div>
                  <div class="mt-1 text-base text-gray-600">{stat.title}</div>
                </div>
              </div>
            </div>
          </a>
        )
        )}
        </div>
      </div>
      <Routes>
        <Route path="/investors" element={<Investors />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default Admin;
