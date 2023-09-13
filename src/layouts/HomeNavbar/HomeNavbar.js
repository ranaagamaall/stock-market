import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/data/investor/NavData";
import brand from "../../assets/icons/brand.svg";

function HomeNavbar(props) {
  const pic = "https://source.unsplash.com/random/200x200";

  return (
    <div className="flex w-full shadow-lg bg-secondary px-14">
      <div className="w-full flex justify-between items-center ">
        <NavLink to="/admin/">
          <h2 className="font-main font-bold text-[1.5rem] leading-8 flex gap-3 items-center ">
            <img src={brand} alt="brand" className="w-[2rem]" />
            Stocker
          </h2>
        </NavLink>
        <ul className="flex gap-4 items-center">
          {data.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  [
                    "text-[1rem] font-main relative cursor-pointer flex gap-4 items-center my-6 capitalize",
                    isActive
                      ? "font-bold after:content-[''] after:w-2 after:h-[100%] after:bg-text after:absolute  after:left-[-3rem] after:rounded-r-[0.5rem]"
                      : "",
                  ].join(" ")
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div class="relative mt-2 w-[16rem] mx-auto flex flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-text bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-text outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-text focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Search Companies"
            onChange={(e) => {}}
          />
        </div>
        <div className="flex gap-4">
          <h4>+pts</h4>
          <img src={pic} alt="profilepic" className="rounded-full w-[2rem]" />
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
