const Button = (props) =>{
    const btn = props.data.map((color, i) => {
        return <button key={i} style={{backgroundColor: color, margine: "10px", padding: "10px"}}>{color}</button>
    });
    return <div>
        {btn}
    </div>
}

export default Button