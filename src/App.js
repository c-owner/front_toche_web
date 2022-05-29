import './App.css';
import './assets/css/util.scss';
import "antd/dist/antd.min.css";
import Main from "./pages/main";
import logo from "./assets/images/toche-Logo-512.png"
import "./assets/css/util.scss";


import {
    BrowserRouter, Routes, Route, Link,
} from "react-router-dom";
import {useEffect} from "react";
import {PageHeader} from "antd";

function App() {
    return (<div className="app">
        <div id="header">
            <div className="d-flex header-box">
                <img src={logo} id="header-logo" alt=""/>
                <PageHeader className="site-page-header" title="롤토체스 초심자를 위한 가이드"
                            subTitle="아직 미정입니다.">
                </PageHeader>
                {/*onBack={() => null}*/}
            </div>
        </div>
        <div id="body" className="tft-app-body">
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </div>
        <div id="footer"></div>
    </div>);
}

export default App;
