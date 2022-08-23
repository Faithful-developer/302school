import './AboutPage.scss'
import {Link} from "react-router-dom";
import DirectorPhoto from '../../assets/images/director.png'
import TeacherCard from "../../components/TeacherCard";
import Teacher_1 from '../../assets/images/teacher-1.png'
import Teacher_2 from '../../assets/images/teacher-2.jpg'
import Teacher_3 from '../../assets/images/teacher-3.jpg'
import Teacher_4 from '../../assets/images/teacher-4.jpg'
import Teacher_5 from '../../assets/images/teacher-5.jpg'
import Teacher_6 from '../../assets/images/teacher-6.png'
import {Helmet} from "react-helmet";

const AboutPage = () => {

    const TeacherInfo = [
        {
            imgLink: Teacher_1,
            name: 'Kamila Kamolova',
            position: 'Head Teacher'
        },
        {
            imgLink: Teacher_2,
            name: 'Nasiba Djurayevna',
            position: 'Physics Teacher'
        },
        {
            imgLink: Teacher_3,
            name: 'Hilola Bahodirovna',
            position: 'Math Teacher'
        },
        {
            imgLink: Teacher_4,
            name: 'Nasiba Yuldashevna',
            position: 'English Teacher'
        },
        {
            imgLink: Teacher_5,
            name: 'Malika Sobitova',
            position: 'Russian Teacher'
        },
        {
            imgLink: Teacher_6,
            name: 'Madina Kholikova',
            position: 'Geometry Teacher'
        },
    ]


    return (
        <>
            <Helmet>
                <title>302-school || About Page</title>
            </Helmet>
            <div className="about-intro">
                <div className="container">
                    <div className="pagination">
                        <span className='bg-title'>About</span>
                        <div className="pagination-page">
                            <div className="span">
                                <Link to='/'>Home</Link>
                                <span>/</span>
                                <span>About</span>
                            </div>
                            <h2>About</h2>
                        </div>
                        <div className="line"/>
                    </div>
                </div>
            </div>
            <div className="our-workers">
                <div className="container">
                    <div className="director">
                        <h2>Our director</h2>
                        <img src={DirectorPhoto} alt=""/>
                        <h3 className="name">
                            Anora Radjibova
                        </h3>
                    </div>
                    <div className="our-teachers">
                        <h2 className='title' >Our Teachers</h2>
                        {
                            TeacherInfo.map((teacher , index) => (
                               <TeacherCard
                                   key={index}
                                   imgLink={teacher.imgLink}
                                   TeacherName={teacher.name}
                                   TeacherPosition={teacher.position}
                               />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="location">
                <div className="container">
                    <h2>Our location</h2>
                    <iframe title='location'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11977.902515421487!2d69.27877!3d41.36375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x999335662191f91a!2sSchool%20302!5e0!3m2!1sen!2s!4v1660195710606!5m2!1sen!2s"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
        </>
    )
}

export default AboutPage