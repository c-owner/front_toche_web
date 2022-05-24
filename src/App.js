import './App.css';
import "antd/dist/antd.min.css";
import Main from "./pages/main";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import {useEffect} from "react";

function App() {
    return (
        <div>
            <div id="header">
                <div id="header-area">
                        <img src="./logo.svg" alt=""/>
                </div>
            </div>
            <div id="body">
                <Routes>
                
                <Route path="/" element={<Main/>} />
                </Routes>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default App;
