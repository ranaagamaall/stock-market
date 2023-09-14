// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import HomeNavbar from "../../layouts/HomeNavbar/HomeNavbar";
import Home from "./home/Home";

function Investor() {
  return (
    <div className="bg-secondary inset-x-0 min-h-[100vh] text-text flex">
      <div className="w-full">
        <HomeNavbar />
        <main className="flex flex-col w-full gap-4 px-14 py-8 justify-evenly">
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Investor;
