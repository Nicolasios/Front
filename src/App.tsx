import Login from "./Pages/LoginPage";
import {Link, Routes, Route} from "react-router-dom";
import GradButton from "./Components/GradButton";
import RainbowText from "./Components/RainbowText";
import Home from "./Pages/HomePage";

const App = ()=>{

    return (
        <div>
            <Link className="list-group-item" to="/GradButton">GradButton</Link>
            <br/>
            <Link className="list-group-item" to="/RainbowText">RainbowText</Link>
            <br/>
            <Link className="list-group-item" to="/Login">login</Link>
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