import './AchievementPage.scss'
import {Link, useParams} from "react-router-dom";
import img from "../../assets/images/intro-backgroun.jpeg";
import {Helmet} from "react-helmet";
import SATPhoto from '../../assets/images/SAT.jpeg'
import MathPhoto from '../../assets/images/math.jpeg'
import ArtelPhoto from '../../assets/images/artel.jpeg'

const AchievementPage = () => {

    const {id} = useParams()

    function findAchievmentById(array, idNumber) {
        return array.find((element) => {
            return element.id === idNumber;
        })
    }

    const AchievementInfo = [
        {
            id: 1,
            imgLink: [SATPhoto],
            achievement: 'SAT - 1400',
            sentence: 'I managed to get 1400 hundred on SAT and my total scholarship is 145.000$ dollars'
        },
        {
            id: 2,
            imgLink: [MathPhoto],
            achievement: 'Math republic almypiad',
            sentence: 'I won republic olympiad of Math and I have been accepted to 10 universities'
        },
        {
            id: 3,
            imgLink: [ArtelPhoto],
            achievement: 'Artel',
            sentence: 'I haven\'t been accepted to anywhere but I work at Artel now'
        }
    ]

    let achievement = findAchievmentById(AchievementInfo, parseInt(id))

    return (
        <>
            <Helmet>
                <title>302-school || About Page</title>
            </Helmet>
            <div className="achievement-intro">
                <div className="container">
                    <div className="pagination">
                        <span className='bg-title'>About</span>
                        <div className="pagination-page">
                            <div className="span">
                                <Link to='/'>Home</Link>
                                <span>/</span>
                                <span>Achievement</span>
                            </div>
                            <h2>Achievement</h2>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
            </div>
            <div className="achievement-body">
                <div className="container">
                    <div className="img-wrapper">
                        {
                            achievement.imgLink.map((item, index) => (
                                <img src={item} alt="" key={index} />
                            ))
                        }
                    </div>
                    <div className="content-wrapper">
                        <h1>{achievement.achievement}</h1>
                        <p>{achievement.sentence}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AchievementPage