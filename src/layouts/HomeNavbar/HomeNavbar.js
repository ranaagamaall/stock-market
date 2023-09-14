import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/data/investor/NavData";
import brand from "../../assets/icons/brand.svg";

function HomeNavbar(props) {
  const pic = "https://source.unsplash.com/random/200x200";

  return (
    <div className="shadow-lg bg-primary px-14 pb-36 font-main ">
      <div className="flex w-full ">
        <div className="flex items-center justify-between w-full ">
          <NavLink to="/home/">
            <h2 className=" font-bold text-[1.5rem] leading-8 flex gap-3 items-center ">
              <img src={brand} alt="brand" className="w-[2rem]" />
              Stocker
            </h2>
          </NavLink>
          <ul className="flex items-center gap-4">
            {data.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    [
                      "text-[1rem]  relative cursor-pointer flex gap-4 items-center my-6 capitalize hover:text-accent hover:ease-in ",
                      isActive
                        ? "font-bold text-accent translate-y-[-2px]"
                        : "",
                    ].join(" ")
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <h4 className="px-3 text-lg font-medium bg-success rounded-3xl text-primary">
              $ 17000
            </h4>
            <img
              src={pic}
              alt="profilepic"
              className="rounded-full w-[2.5rem] border-2 border-success "
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="pt-6 pb-2 text-4xl font-semibold capitalize text-text">welcome back, john</h1>
          <p className="font-light capitalize opacity-75 text-text">This is your monthly overview report</p>
        </div>
        <div className="relative mt-2 w-[16rem] flex flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded border border-solid border-text bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-text outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-text focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Search Companies"
            onChange={(e) => { }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
