import React from "react";
import styled from "styled-components";

import "./NavBar.css";

import logo from "../../Img/logo.PNG";
import instagram from "../../Img/instagram.PNG";
import compass from "../../Img/compass.PNG";
import like from "../../Img/like.PNG";
import follow from "../../Img/follow.PNG";
// import magGlass from "../../Img/mag-glass.PNG";

const StyledInput = styled.input`
  height: 25px;
  width: 135px;
  margin-top: 7px;
  border: 1px solid lightgrey;
  color: grey;
  font-size: 11px;
  text-align: center;
`;

function NavBar(props) {
  // console.log(props);
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
      <form onSubmit={props.filter}>
        <StyledInput
          type="text"
          placeholder="Search"
          onChange={props.change}
          value={props.search}
        />
      </form>
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
