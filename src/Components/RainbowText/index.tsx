import './index.scss'

const RainbowText = (props: { text: String }) => {
    let letters:string[] = props.text.split("");

    function spanStyleFunc(letters: string[]){
        let arr:any[] = [];
        letters.forEach((letter,i)=>{
            arr.push({
                index: i,
                text: letter,
            })
        })
        return arr;
    }

    const  spanArr = spanStyleFunc(letters);

    console.log(spanArr);

    return (
        <div className={"rainbow"} >
            {
                spanArr.map((span,index)=>{
                    const spanStyle = {animationDelay: `${-20 + index * 0.2}s`};
                    return (
                        <span key={index} style={spanStyle}>
                            {span.text}
                        </span>
                    );
                })
            }
        </div>
    );
}

export default RainbowText