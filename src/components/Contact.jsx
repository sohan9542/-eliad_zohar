import React from "react";
import cbox from "../Alpha/Community Box.png";
import cm from "../Alpha/Communtiy Element.svg";
import uarrow from "../Alpha/Up Arrow.svg";
import { RiArrowUpSLine } from "react-icons/ri";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
const Contact = () => {
    const scrollEvent = (value)=>{
        window.scrollTo(0, value)
      }
  return (
    <div className=" w-full pt-32">
      <div className="flex items-center flex-col justify-center">
        <div className="container hidden lg:flex relative  items-center justify-center">
          <img
            src={cbox}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
          <div
            className=" absolute w-32 h-32 z-20 hidden lg:block"
            style={{ top: "-50px", right: "-60px" }}
          >
            <img
              src={cm}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div
          onClick={()=>scrollEvent(0)}
            className=" absolute w-12 h-12 z-20 cursor-pointer"
            style={{ top: "-25px", left: "48%" }}
          >
            <img
              src={uarrow}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
            <div
              className=" absolute z-20"
              style={{ top: "10px", left: "22%" }}
            >
              <RiArrowUpSLine className="text-white w-7 h-7" />
            </div>
          </div>
          <div className="absolute z-20" style={{ top: "50px", left: "38%" }}>
            <h2 className=" font-bold text-white">Join our community</h2>
          </div>
          <div
            className="absolute z-20 w-96"
            style={{ top: "100px", left: "34%" }}
          >
            <p className=" text-white font-light text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis iste neque minus voluptatem, fugit voluptates veniam
              fugiat natus dignissimos dolorem{" "}
            </p>
          </div>
          <div
            className="absolute z-20 w-96f flex items-center justify-center gap-3"
            style={{ top: "180px", left: "42%" }}
          >
            <SiDiscord className=" cursor-pointer text-white h-5 w-5" />
            <AiOutlineTwitter className=" cursor-pointer text-white h-5 w-5" />
            <BsWhatsapp className=" cursor-pointer text-white h-5 w-5" />
            <FaTiktok className=" cursor-pointer text-white h-5 w-5" />
            <AiOutlineInstagram className=" cursor-pointer text-white h-5 w-5" />
            <AiFillYoutube className=" cursor-pointer text-white h-5 w-5" />
          </div>
        </div>
        <div className="container flex bg_contact h-80 rounded-3xl w-full lg:hidden relative  items-center justify-center">
       
          <div
            className=" absolute w-32 h-32 z-20 hidden lg:block"
            style={{ top: "50px", right: "-60px" }}
          >
            <img
              src={cm}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div
          onClick={()=>scrollEvent(0)}
            className=" absolute w-12 h-12 z-20 cursor-pointer"
            style={{ top: "-25px", left: "44%" }}
          >
            <img
              src={uarrow}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
            <div
              className=" absolute z-20"
              style={{ top: "10px", left: "22%" }}
            >
              <RiArrowUpSLine className="text-white w-7 h-7" />
            </div>
          </div>
          <div className="absolute z-20" style={{ top: "50px", left: "24%" }}>
            <h2 className=" font-bold text-white">Join our community</h2>
          </div>
          <div
            className="absolute z-20 w-80"
            style={{ top: "100px", left: "10%" }}
          >
            <p className=" text-white font-light text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis iste neque minus voluptatem, fugit voluptates veniam
              fugiat natus dignissimos dolorem{" "}
            </p>
          </div>
          <div
            className="absolute z-20 w-96f flex items-center justify-center gap-3"
            style={{ top: "180px", left: "24%" }}
          >
            <SiDiscord className=" cursor-pointer text-white h-5 w-5" />
            <AiOutlineTwitter className=" cursor-pointer text-white h-5 w-5" />
            <BsWhatsapp className=" cursor-pointer text-white h-5 w-5" />
            <FaTiktok className=" cursor-pointer text-white h-5 w-5" />
            <AiOutlineInstagram className=" cursor-pointer text-white h-5 w-5" />
            <AiFillYoutube className=" cursor-pointer text-white h-5 w-5" />
          </div>
        </div>
        <p className=" text-xs text-white w-full text-center font-light py-8">© 2022 - Monster Sheltar, All right reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
