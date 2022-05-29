import React from "react";
import {Input, Button} from "antd";
import "../assets/css/main.scss";
import {MagnifyingGlass} from "phosphor-react";
import logo from "../assets/images/toche-Logo-512.png";

function MainPage() {
    const seasons = ["Spring", "Summer", "Autumn", "Winter", "All", "test", "test", "test"];
    const backgroundUrl = 'https://static-cdn.jtvnw.net/jtv_user_pictures/fd814b27-ba4a-4308-bde8-55292b4bfe37-profile_image-300x300.png'
    const inlineStyle = {
        backgroundImage: `url(${backgroundUrl})`
    };
    return (
        <div className="main-wrap">
            
            <div className="text-center">
                <img src={logo} alt="" width={300}/>
                <div className="d-flex in-input-btn">
                    <Input type="text" placeholder="검색 미정" className="input-style"/>
                    <Button><MagnifyingGlass size={24}/></Button>
                </div>
            </div>
            
            <div className="main-content">
                
                <div className="season_list_content">
                    <h5>시즌(6.5) v12.10 추천메타</h5>
                    <ul className="season_list">
                        {seasons.map((season, index) => {
                            return (
                                <li className="p-relative item_box" style={inlineStyle}>
                                    <div className="p-absolu">
                                        S7
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
                <div className="new_content">
                    <ul className="d-flex tab_content">
                        <li>전체</li>
                        <li>신규 콘텐츠</li>
                        <li>패치 노트</li>
                        <li>커뮤니티</li>
                        <li>전략적 팀 전투 e스포츠</li>
                    </ul>
                    <div>
                    
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MainPage;
