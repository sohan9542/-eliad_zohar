import React from "react";
import { FaHorseHead } from "react-icons/fa";
import opensea from "../Alpha/opensea.png";
import openseaIcon from "../Alpha/OpenSea Icon.svg";
const Opensea = () => {
  return (
    <div className="w-full flex items-center justify-center mt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="w-full flex rounded-3xl overflow-hidden items-center justify-center">
            <div className=" px-7  bg_opensea rounded-3xl">
              <img src={opensea} alt="" />
              <div className=" flex w-full items-center justify-center">
              <div className=" border_button p-1 rounded-3xl my-3">
                <button className=" px-11 gap-2 py-3 rounded-3xl flex items-center  text-lg bg-gray-900 hover:bg-gray-800 text-white">
                <img src={openseaIcon} className="w-5 h-5" alt="" /> OpenSea
                </button>
              </div>
              </div>
            </div>
          </div>
          <div className=" pt-6">
            <h1 className="text-5xl text-white">Horse #1522</h1>
            <p className="text-sm text-white font-light pt-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
              libero iure voluptatibus qui iste corporis facere ratione rerum
              impedit ad odit animi delectus enim maxime provident perferendis
              sed illum nesciunt labore ea, maiores ducimus. Consequatur iste
              neque esse asperiores?
            </p>
            <div className="flex items-center gap-2 flex-wrap mt-5">
              <div className="tool_tip text-sm text-white font-light">
                Hair: Kappa Puddle Black
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Horns: Curled Red
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Wings: None
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap mt-2">
              <div className="tool_tip text-sm text-white font-light">
                Hom: Doggy Brows
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Color: Black
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Tail: Doodle Bllon Yellow
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap mt-2">
              <div className="tool_tip text-sm text-white font-light">
                Mouth: Rabbit
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Nose: Cat Brown
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Feet: Leopard
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Body: Fluffy
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap mt-2">
              <div className="tool_tip text-sm text-white font-light">
                Ears: Cute Bears
              </div>
              <div className="tool_tip text-sm text-white font-light">
                Hands: Doodle
              </div>

              <div className="tool_tip text-sm text-white font-light">
                Eyes: Pop Start Yellow
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opensea;
