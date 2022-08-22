import './AchievementCard.scss'
import {Link} from "react-router-dom";

const AchievementCard = ({id,imgLink, title, sentence}) => {
    return (
        <>
            <Link className="achievement-card" to={`/achievement/${id}`} >
                <img src={imgLink} alt=""/>
                <h3>{title}</h3>
                <p>{sentence}</p>
            </Link>
        </>
    )
}

export default AchievementCard