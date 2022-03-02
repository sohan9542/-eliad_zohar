import React from "react";
import { FaHorseHead } from "react-icons/fa";
import bg1 from "../Alpha/Backgorund element.svg";
import hero from "../Alpha/Hero.svg";
import cmm from "../Alpha/Communtiy Element.svg";
const Hero = ({setModalShow}) => {
  return (
    <div className="w-full flex  items-center justify-center mt-32 min-h-screen bg_hero">
      <div className="container relative">
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 hidden">
          <div className="flex items-start justify-center flex-col gap-4">
            <h1 className="text-5xl font-light text-white">
              Discover and collect extraordinary horse NFTs
            </h1>
            <p className="text-sm font-light text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              mollitia iure asperiores maiores quaerat quas quasi alias minima
              accusamus hic, fugit expedita, laboriosam eos molestias quidem
              doloribus consequatur labore aut similique ullam! Illum ipsam
              doloremque perferendis quasi quod. Ad, qui.
            </p>
            <div onClick={()=>setModalShow(true)} className=" border_button p-1 rounded-3xl mt-10">
              <button className=" px-11 gap-2 py-3 rounded-3xl flex items-center  text-sm bg-gray-900 hover:bg-gray-800 text-white">
                <FaHorseHead /> Mint Now
              </button>
            </div>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:hidden pt-24 lg:pt-0">
        <div className="flex items-center justify-center w-full">
            <img src={hero} alt="" />
          </div>
          <div className="flex items-start justify-center flex-col gap-2">
            <h1 className="text-6xl font-light text-white">
              Discover and collect extraordinary horse NFTs
            </h1>
            <p className="text-lg font-light text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              mollitia iure asperiores maiores quaerat quas quasi alias minima
              accusamus hic, fugit expedita, laboriosam eos molestias quidem
              doloribus consequatur labore aut similique ullam! Illum ipsam
              doloremque perferendis quasi quod. Ad, qui.
            </p>
            <div onClick={()=>setModalShow(true)} className=" border_button p-1 w-full rounded-3xl mt-10">
              <button  className=" px-11 gap-2 w-full py-3 rounded-3xl flex items-center  text-3xl justify-center bg-gray-900 hover:bg-gray-800 text-white">
                <FaHorseHead /> Mint Now
              </button>
            </div>
          </div>
         
        </div>
        <div className="absolute z-10 lg:block hidden" style={{top:"-70px", left:"-50px"}}>
          <img
            src={bg1}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className="absolute z-10 lg:hidden block" style={{top:"-70px", left:"20px"}}>
          <img
            src={bg1}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className="w-full hidden  lg:flex items-center justify-center mt-6">
<img src={cmm} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
