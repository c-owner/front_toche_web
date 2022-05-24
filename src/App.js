import './App.css';
import './assets/css/util.css';
import "antd/dist/antd.min.css";
import Main from "./pages/main";
import {
    BrowserRouter, Routes, Route, Link,
} from "react-router-dom";
import {useEffect} from "react";
import {PageHeader} from "antd";

function App() {
    return (<div class="tft-app-body">
        <div id="header">
            <div className="d-flex w-100-p header-box">
                <img src="./assets/images/logo512.png" id="header-logo" alt=""/>
                <PageHeader className="site-page-header" onBack={
                    () => null
                } title="롤토체스 초심자를 위한 가이드"
                            subTitle="아직 미정입니다.">
                </PageHeader>
            </div>
        </div>
        <div id="body">
            <Routes>
                
                <Route path="/" element={<Main/>}/>
            </Routes>
        </div>
        <div id="footer"></div>
    </div>);
}

export default App;
