

import {Link, Route ,Routes} from "react-router-dom";
import GradButton from "./Components/GradButton";
import RainbowText from "./Components/RainbowText";

const App = ()=>{

    return (
        <div>
            <Link className="list-group-item" to="/GradButton">GradButton</Link>
            <br/>
            <Link className="list-group-item" to="/RainbowText">RainbowText</Link>
            <Routes>
                <Route path="/GradButton" element={<GradButton text={"click on me"}/>}/>
                <Route path="/RainbowText" element={<RainbowText text={"something for you"}/>}/>
            </Routes>
        </div>
    );
};

export  default  App;