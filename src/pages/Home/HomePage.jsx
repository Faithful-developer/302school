import './HomePage.scss'
import Header from "../../containers/Header";
import Slider from "react-slick";
import AchievementCard from "../../components/AchievementCard";
import StudentCard from "../../components/StudentCard";
import MobileHeader from "../../containers/MobileHeader";
import {Helmet} from "react-helmet";
import ElnozStudent from '../../assets/images/Elnoz.jpeg'
import student_2 from '../../assets/images/student-2.jpeg'
import student_3 from '../../assets/images/student-3.jpg'
import student_4 from '../../assets/images/student-4.jpg'
import SATPhoto from '../../assets/images/SAT.jpeg'
import MathPhoto from '../../assets/images/math.jpeg'
import ArtelPhoto from '../../assets/images/artel.jpeg'

const HomePage = ({burger, setBurger}) => {


    const  AchievementInfo = [
        {
            id: 1,
            imgLink: SATPhoto,
            achievement: 'SAT - 1400',
            sentence: 'I managed to get 1400 hundred on SAT and my total scholarship is 145.000$ dollars'
        },
        {
            id: 2,
            imgLink: MathPhoto,
            achievement: 'Math republic olympiad',
            sentence: 'I won republic olympiad of Math and I have been accepted to 10 universities'
        },
        {
            id: 3,
            imgLink: ArtelPhoto,
            achievement: 'Artel',
            sentence: 'I haven\'t been accepted to anywhere but I work at Artel now'
        }
    ]

    const studentComment = [
        {
            imgLink: ElnozStudent,
            studentName: 'Elnoz',
            comment: 'Since I am an Athlete student an athlete student I have to be more concentrated on my sport. I found the balance heere'
        },
        {
            imgLink: student_2,
            studentName: 'Mike',
            comment: 'Why I choose this school. I also gave this question to myself. Even if I am from not loaded family they cared about me to much and I am here to succeed'
        },
        {
            imgLink: student_3,
            studentName: 'Mike',
            comment: 'I found myself here in 302 school, school curriculum curriculum is made for students future success. Atmosphere here is so amazing friendly students and helpful teachers.'
        },
        {
            imgLink: student_4,
            studentName: 'Mike',
            comment: 'My life quote is: Don\'t wait for the perfect moment make it perfect'
        },
        {
            imgLink: ElnozStudent,
            studentName: 'Elnoz',
            comment: 'Since I am an Athlete student an athlete student I have to be more concentrated on my sport. I found the balance heere'
        },
        {
            imgLink: student_2,
            studentName: 'Mike',
            comment: 'Why I choose this school. I also gave this question to myself. Even if I am from not loaded family they cared about me to much and I am here to succeed'
        },
        {
            imgLink: student_3,
            studentName: 'Mike',
            comment: 'I found myself here in 302 school, school curriculum curriculum is made for students future success. Atmosphere here is so amazing friendly students and helpful teachers.'
        },
        {
            imgLink: student_4,
            studentName: 'Mike',
            comment: 'My life quote is: Don\'t wait for the perfect moment make it perfect'
        }
    ]

    const settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>302-school || Home Page</title>
            </Helmet>
            <div className="home-intro-wrapper">
                <div className="container">
                    <MobileHeader burger={burger} setBurger={setBurger} />
                    <Header burger={burger} setBurger={setBurger} />
                    <div className="home-intro-content">
                        <div className="wrapper">
                            <h2>
                                THE DEPARTMENT OF
                                PUBLIC EDUCATION
                                YUNUSABAD DISTRICT
                                SCHOOL №302
                            </h2>
                            <p>
                                We all well understand that education and upbringing are of decisive importance not only in today’s life, but also for the future of any state and society
                                <br/>
                                <span className="name-quote">
                                    Sh.M.Mirziyoyev  President of Uzbekistan
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-achievements">
                <div className="container">
                    {
                        AchievementInfo.map((item, index) => (
                            <AchievementCard
                                key={index}
                                id={item.id}
                                imgLink={item.imgLink}
                                title={item.achievement}
                                sentence={item.sentence}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='student-comment'>
                <div className="container">
                    <h2 className="title">Student's Comment</h2>
                    <Slider {...settings}>
                        {
                            studentComment.map((student, index) => (
                                <StudentCard
                                    key={index}
                                    studentImg={student.imgLink}
                                    studentName={student.studentName}
                                    studentComment={student.comment}
                                />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default HomePage