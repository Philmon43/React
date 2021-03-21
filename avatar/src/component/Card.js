const Card = ({card}) => {
    return card.map((card, i) => {
        return <div key={i} style={{background: "#333", color: "white", padding: "10px", margin: "10px"}}>
            <h3>{card.name.first+" "+card.name.last}</h3>
            <img src={card.picture.large} alt="selam" />
        </div>
    })
}
export default Card