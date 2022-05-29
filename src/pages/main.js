import React from "react";
import {Input, Button} from "antd";
import "../assets/css/main.css";
import {MagnifyingGlass} from "phosphor-react";
import logo from "../assets/images/toche-Logo-512.png";

function MainPage() {
  
  return (
      <div className="main-wrap">
        
        <div className="main-search">
            <img src={logo} alt="" width={300}/>
          <div className="d-flex in-input-btn">
            <Input type="text" placeholder="검색 미정" className="input-style" />
            <Button><MagnifyingGlass size={24} /></Button>
          </div>
          <div className="main-search-button">
          </div>
        </div>
        
        <div className="main-content">
            <div className="">
                <h5>시즌(6.5) v12.10 추천메타</h5>
            </div>
            
        </div>
      </div>
  );
}

export default MainPage;
