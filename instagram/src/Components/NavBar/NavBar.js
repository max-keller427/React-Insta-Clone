import React from "react";
import "./NavBar.css";

import logo from "../../Img/logo.PNG";
import instagram from "../../Img/instagram.PNG";
import compass from "../../Img/compass.PNG";
import like from "../../Img/like.PNG";
import follow from "../../Img/follow.PNG";
import magGlass from "../../Img/mag-glass.PNG";

function NavBar() {
  return (
    <div className="nav">
      <div className="left-nav">
        <a href="">
          <img src={logo} className="logo" />
        </a>
        <a href="">
          <img src={instagram} className="instagram" />
        </a>
      </div>
      <input type="text" placeholder="Search" />
      <div className="right-nav">
        <a href="">
          <img src={compass} />
        </a>
        <a href="">
          <img src={like} />
        </a>
        <a href="">
          <img src={follow} />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
