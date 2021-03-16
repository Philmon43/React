import "./Cards.css";

const Card = ({title, paragraph, source}) => {
    return <div className="card">
                <img src={source} alt="ant_image" />
                <div className="card_details">
                    <h1>{title}</h1>
                    <p>{paragraph}</p>
                    <a href="#">SHARE</a>
                    <a href="#">EXPLORE</a>
                </div>
            </div>
}

export default Card