import React from "react";
import logo from "../Alpha/Logo.svg";
const Topbar = () => {
  return (
    <div className=" w-full pt-8 flex items-center justify-center">
      <div className="container">
        <div className=" flex items-center justify-between flex-col lg:flex-row gap-2">
          <div className="h-16">
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="flex items-center flex-wrap justify-center gap-8">
            <div className="flex items-center  gap-8">
              <a
                href="#about"
                className="  text-white hover:text-pr text-lg w-full text-center"
              >
                About
              </a>
              <a
                href="#Explore"
                className="  text-white hover:text-pr text-lg w-full text-center"
              >
                Explore
              </a>
              <a
                href="#Roadmap"
                className="  text-white hover:text-pr text-lg w-full text-center"
              >
                Roadmap
              </a>
              <a
                href="#FAQ"
                className="  text-white hover:text-pr text-lg w-full text-center"
              >
                FAQ
              </a>
              <a
                href="#Team"
                className="  text-white hover:text-pr text-lg w-full text-center"
              >
                Team
              </a>
              <a
                href="#Community"
                className="  text-white hover:text-pr text-lg w-full text-center"
              >
                Community
              </a>
            </div>
            <div className=" border_button p-1 rounded-3xl">
              <button className=" px-14 py-3 rounded-3xl  text-lg  bg-gray-900 hover:bg-gray-800 text-white">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
