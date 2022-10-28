import './index.css'
const GradButton = (props: { text: string; }) => {
    const text = props.text
    return (
        <button className={"GradButton"}>
            {text}
        </button>
    );
}

export default GradButton