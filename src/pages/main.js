import React from "react";
import {Input} from "antd";
import {MagnifyingGlass} from "phosphor-react";
import logo from "../assets/images/toche-Logo-512.png";

import {useNavigate} from "react-router-dom";

const { Search } = Input;

function MainPage() {
    const navigate = useNavigate();

    const seasons = ["Spring", "Summer", "Autumn", "Winter", "All", "test", "test", "test"];
    const backgroundUrl = 'https://static-cdn.jtvnw.net/jtv_user_pictures/fd814b27-ba4a-4308-bde8-55292b4bfe37-profile_image-300x300.png'
    const inlineStyle = {
        backgroundImage: `url(${backgroundUrl})`
    };
    const tab_list = [
        {
            no: '0',
            name: '전체',
            url: '/?type=all',
        },
        {
            no: '1',
            name: '신규 콘텐츠',
            url: '/?type=new',
        },
        {
            no: '2',
            name: '패치 노트',
            url: '/?type=patch',
        },
        {
            no: '3',
            name: '챔피언',
            url: '/?type=commu',
        },
        {
            no: '4',
            name: '전략적 팀 전투 e스포츠',
            url: '/?type=live',
        },
    ]

    let activeClass;

    function toggleClass(no) {
        switch (no) {
            case '0':
                activeClass = 'all';
                break;
            case '1':
                activeClass = 'new';
                break;
            case '2':
                activeClass = 'patch';
                break;
            case '3':
                activeClass = 'commu';
                break;
            case '4':
                activeClass = 'live';
                break;
            default:
                activeClass = 'none';
                break;
        }
    }

    return (
        <div className="main-wrap">

            <div className="text-center">
                <img src={logo} alt="" width={300}/>
                <div className="d-flex in-input-btn flex-center">
                    <Search className="input-style" placeholder="검색어를 입력해주세요" enterButton={<MagnifyingGlass size={24}/>}
                            // onSearch={value => navigate(`/search/${value}`)}
                            size="large" loading={true} />
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
                        {
                            tab_list.map((tab) => {
                                return (
                                    <li className={activeClass}
                                        onClick={() => {
                                            navigate(tab.url)
                                            toggleClass(tab.no)
                                        }
                                    }>
                                        {tab.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* 내용물 컴포넌트화 */}
                    <div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default MainPage;
