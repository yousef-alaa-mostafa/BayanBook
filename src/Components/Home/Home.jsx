import React from "react";

//used styles
import HomeStyle from "./Home.module.css";

//used components
import Nabbar from "../Navbar/Nabbar";
import Footer from "../Footer/Footer";
import { img1, img2, img3 } from "./images";

function Home() {
  return (
    <div className={HomeStyle.main}>
      <Nabbar />
      <div className={HomeStyle.body_}>
        <img width={"70%"} src={img1}></img>
        <img width={"70%"} src={img2}></img>
        <h2>
          <span>
            MANAGE PERFORMANCE AND RISK
            <br />
            WITH CENTRALIZED, DATA-DRIVEN INSIGHTS
          </span>
        </h2>
        <img width={"70%"} src={img3}></img>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
