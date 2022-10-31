import './index.css'
import {message} from "antd";
const GradButton = (props: { text: string; }) => {
    const text = props.text
    return (
        <button className={"GradButton"} onClick={()=>{
            message.success("login success")
        }}>
            {text}
        </button>
    );
}

export default GradButton