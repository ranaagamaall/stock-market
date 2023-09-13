import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/data/admin/adminSidebar";
import brand from "../../assets/icons/brand.svg";

// import "animate.css";

function SideBar(props) {
  return (
    <div className="flex flex-col w-full h-full min-h-screen py-12 shadow-lg bg-secondary">
      <div className="min-w-[50%] flex items-center gap-4 mx-auto">
        <NavLink to="/admin/">
          <h2 className="font-main font-bold text-[2rem] leading-8 flex gap-5 items-center ">
            <img src={brand} alt="brand" className="w-[2.5rem]"
            />
            Stocker
          </h2>
        </NavLink>
      </div>
      <div className="ml-[3rem] mt-[5rem]">
        <ul className="mt-[2rem]">
          {data.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) => ["text-[1.3rem] font-main relative cursor-pointer flex gap-4 items-center my-6 ",
                  isActive
                    ? "font-bold after:content-[''] after:w-2 after:h-[100%] after:bg-text after:absolute  after:left-[-3rem] after:rounded-r-[0.5rem]"
                    : ""
                ].join(" ")}
              >
                <img className="w-[2.5rem]" src={item.icon} alt="icon" />
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
