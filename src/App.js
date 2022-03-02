import React from "react";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Opensea from "./components/Opensea";
import Roadmap from "./components/Roadmap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Topbar from "./layouts/Topbar";
import Team from "./components/Team";
import Contact from "./components/Contact";
const App = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className=" min-h-screen w-full  full_bg">
      <Topbar modalShow={modalShow} setModalShow={setModalShow} />
       <Hero modalShow={modalShow} setModalShow={setModalShow}/>
      <Opensea />
      <Roadmap />
      <Faq />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
