// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import HomeNavbar from "../../layouts/HomeNavbar/HomeNavbar";
import Home from "./home/Home";
import Company from "./company/Company";

function Investor() {
  return (
    <div className="bg-secondary inset-x-0 min-h-[100vh] text-text flex">
      <div className="w-full">
        <HomeNavbar />
        <main className="flex flex-col w-full gap-4 p-8 justify-evenly">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/company/:id" element={<Company />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Investor;
