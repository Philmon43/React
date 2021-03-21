const Card = ({card}) => {
    return card.map((card, i) => {
        return <div key={i} style={{background: "#333", color: "white", padding: "10px", margin: "10px", float: "left"}}>
            <h1>{card.name}</h1>
            <h2>{card.birthday}</h2>
            <ul>
                <p>favoriteFoods:</p>
                <li>meats: {card.favoriteFoods["meats"]}</li>
                <li>fish: {card.favoriteFoods["fish"]}</li>
            </ul>
        </div>
    })
}
export default Card