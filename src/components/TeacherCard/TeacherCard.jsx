import './TeacherCard.scss'

const TeacherCard = ({imgLink, TeacherName, TeacherPosition}) => {
    return (
        <>
            <div className="teacher-card">
                <img src={imgLink} alt=""/>
                <h3>{TeacherName}</h3>
                <p>{TeacherPosition}</p>
            </div>
        </>
    )
}

export default TeacherCard