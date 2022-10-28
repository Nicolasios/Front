import './index.scss'
const ShineGradButton = (props: { text: string; }) => {
    const text = props.text
    return (
        <button className={"btn btn-shine-gradient"}>
            {text}
        </button>
    );
}

export default ShineGradButton