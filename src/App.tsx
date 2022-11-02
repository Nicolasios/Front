import Login from "./Pages/LoginPage";
import {Link, Routes, Route} from "react-router-dom";
import GradButton from "./Components/GradButton";
import RainbowText from "./Components/RainbowText";
import Home from "./Pages/HomePage";

const App = ()=>{

    return (
        <div>
            <Routes>
                <Route path="/GradButton" element={<GradButton text={"click on me"}/>}/>
                <Route path="/RainbowText" element={<RainbowText text={"something for you"}/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        </div>
    );
};

export  default  App;