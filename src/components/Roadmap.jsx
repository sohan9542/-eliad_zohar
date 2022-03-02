import React from "react";
import r1 from "../Alpha/r1.svg";
import r2 from "../Alpha/r2.svg";
import r3 from "../Alpha/r3.svg";
import r4 from "../Alpha/r4.svg";
import r5 from "../Alpha/r5.svg";
import r6 from "../Alpha/r6.svg";
const Roadmap = () => {
  return (
    <div id="#Roadmap" className=" min-h-screen bg_hero ">
      <div className=" pt-11 lg:pt-32 flex items-center justify-center w-full bg_roadmap">
        <div className="container ">
          <h1 className="text-5xl text-white w-full font-light text-center">Roadmap</h1>

          <div className=" pt-16">
            <div className=" hidden lg:flex flex-col gap-3 relative">
              <div className=" grid grid-cols-2 gap-24">
                <div className=" w-full flex items-center justify-end">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg w-96 text-white rounded-3xl ">
                    <div className="h-20">
                      <img
                        src={r1}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">First 700 sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className=" grid grid-cols-2 gap-24">
                <div></div>
                <div className=" w-full flex items-center">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white w-96 rounded-3xl ">
                    <div className="h-20">
                      <img
                        src={r2}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">1000 Sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-24">
                <div className=" w-full flex items-center justify-end">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r3}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">1,500 sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
                <div></div>
              </div>
              <div className=" grid grid-cols-2 gap-24">
                <div></div>
                <div className=" w-full flex items-center">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r4}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">2000 Cristmas Sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-2 gap-24">
                <div className=" w-full flex items-center justify-end">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r5}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">2,500 sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
                <div></div>
              </div>

              <div className=" grid grid-cols-2 gap-24">
                <div></div>
                <div className=" w-full flex items-center">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r6}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">3000 Sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
              </div>
              <div
                className="absolute w-2 bg_opensea top-0"
                style={{ height: "800px", zIndex: "50", left: "50%" }}
              ></div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"49.4%", padding:"3px 3px", top:"-10px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"49.4%", padding:"3px 3px", top:"155px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"49.4%", padding:"3px 3px", top:"315px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"49.4%", padding:"3px 3px", top:"475px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"49.4%", padding:"3px 3px", top:"625px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"49.4%", padding:"3px 3px", top:"790px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
            </div>
            <div className=" flex lg:hidden flex-col gap-3 relative">
              <div className=" grid grid-cols-1 ml-12">
                <div className=" w-full flex items-center ">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg w-96 text-white rounded-3xl ">
                    <div className="h-20">
                      <img
                        src={r1}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">First 700 sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
               
              </div>
              <div className=" grid grid-cols-1 ml-12">
              
                <div className=" w-full flex items-center">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white w-96 rounded-3xl ">
                    <div className="h-20">
                      <img
                        src={r2}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">1000 Sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 ml-12">
                <div className=" w-full flex items-center ">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r3}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">1,500 sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
               
              </div>
              <div className=" grid grid-cols-1 ml-12">
               
                <div className=" w-full flex items-center">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r4}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">2000 Cristmas Sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1 ml-12">
                <div className=" w-full flex items-center ">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r5}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">2,500 sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
              
              </div>

              <div className=" grid grid-cols-1 ml-12">
                
                <div className=" w-full flex items-center">
                  <div className="relative flex py-6 px-6 gap-4 overflow-hidden items-center col-span-4 card_bg text-white rounded-3xl w-96">
                    <div className="h-20">
                      <img
                        src={r6}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg">3000 Sales</p>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className="bg_opensea h-2 absolute top-0 left-0 w-full z-20"></div>
                  </div>
                </div>
              </div>
              <div
                className="absolute w-2 bg_opensea top-0"
                style={{ height: "800px", zIndex: "50", left: "5%" }}
              ></div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"2.9%", padding:"3px 3px", top:"-10px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"2.9%", padding:"3px 3px", top:"155px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"2.9%", padding:"3px 3px", top:"315px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"2.9%", padding:"3px 3px", top:"475px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"2.9%", padding:"3px 3px", top:"625px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
               <div className="absolute w-6 rounded-full h-6 bg_opensea " style={{ zIndex:"55", left:"2.9%", padding:"3px 3px", top:"790px"}}>
                   <div className=" w-full h-full rounded-full bg-gray-800">

                   </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
