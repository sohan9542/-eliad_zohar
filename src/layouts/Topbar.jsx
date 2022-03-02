import React, { useState } from "react";
import logo from "../Alpha/Logo.svg";
import mbLogo from "../Alpha/Mobile Menu Icon.svg";
import { Modal } from "react-bootstrap";
import Mint from "../Old";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body>
        <Mint/>
      </Modal.Body>
    </Modal>
  );
}

const Topbar = ({modalShow, setModalShow}) => {
  const scrollEvent = (value) => {
    window.scrollTo(0, value);
  };
  const [open, setOpen] = useState(false);
  

  return (
    <div className=" w-full pt-8 flex items-center justify-center">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="container">
        <div className=" flex items-center justify-between relative gap-2">
          <div className="h-16">
            <img
              src={logo}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className=" hidden lg:flex items-center flex-wrap justify-center gap-8">
            <div className="flex items-center  gap-8">
              <a
                href="#about"
                onClick={() => scrollEvent(300)}
                className="  text-white hover:text-pr text-sm w-full text-center"
              >
                About
              </a>
              <a
                onClick={() => scrollEvent(1200)}
                href="#Explore"
                className="  text-white hover:text-pr text-sm w-full text-center"
              >
                Explore
              </a>
              <a
                onClick={() => scrollEvent(1700)}
                href="#Roadmap"
                className="  text-white hover:text-pr text-sm w-full text-center"
              >
                Roadmap
              </a>
              <a
                onClick={() => scrollEvent(2900)}
                href="#FAQ"
                className="  text-white hover:text-pr text-sm w-full text-center"
              >
                FAQ
              </a>
              <a
                onClick={() => scrollEvent(3400)}
                href="#Team"
                className="  text-white hover:text-pr text-sm w-full text-center"
              >
                Team
              </a>
              <a
                onClick={() => scrollEvent(3800)}
                href="#Community"
                className="  text-white hover:text-pr text-sm w-full text-center"
              >
                Community
              </a>
            </div>
            <div className=" border_button p-1 rounded-3xl">
              <button
                onClick={() => setModalShow(true)}
                className=" px-14 py-3 rounded-3xl  text-sm bg-gray-900 hover:bg-gray-800 text-white"
              >
                Mint now
              </button>
            </div>
          </div>
          {
            <div
              className={
                open
                  ? "w-12 h-12 lg:hidden border-4 rounded-md border-pr p-2 cursor-pointer"
                  : "w-12 h-12 cursor-pointer p-2 lg:hidden"
              }
              onClick={() => setOpen(!open)}
            >
              <img
                src={mbLogo}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>
          }
          {open && (
            <div
              style={{ top: "80px" }}
              className=" flex z-40 lg:hidden   flex-col gap-3 flex-wrap justify-center absolute left-0  w-full h-52 bg-pr p-3 rounded-md text-white"
            >
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#about"
                  onClick={() => scrollEvent(300)}
                  className="  text-white hover:text-pr text-sm w-full text-center"
                >
                  About
                </a>
                <a
                  onClick={() => scrollEvent(1300)}
                  href="#Explore"
                  className="  text-white hover:text-pr text-sm w-full text-center"
                >
                  Explore
                </a>
                <a
                  onClick={() => scrollEvent(2300)}
                  href="#Roadmap"
                  className="  text-white hover:text-pr text-sm w-full text-center"
                >
                  Roadmap
                </a>
                <a
                  onClick={() => scrollEvent(3400)}
                  href="#FAQ"
                  className="  text-white hover:text-pr text-sm w-full text-center"
                >
                  FAQ
                </a>
                <a
                  onClick={() => scrollEvent(4200)}
                  href="#Team"
                  className="  text-white hover:text-pr text-sm w-full text-center"
                >
                  Team
                </a>
                <a
                  onClick={() => scrollEvent(6200)}
                  href="#Community"
                  className="  text-white hover:text-pr text-sm w-full text-center"
                >
                  Community
                </a>
              </div>
              <div className=" border_button w-80 items-center justify-center flex p-1 rounded-3xl ">
                <button   onClick={() => setModalShow(true)} className=" px-14 py-3 w-full rounded-3xl  text-sm bg-gray-900 hover:bg-gray-800 text-white">
                  Mint now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
