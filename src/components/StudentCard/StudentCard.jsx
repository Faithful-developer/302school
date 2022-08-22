import './StudentCard.scss'

const StudentCard = ({studentImg, studentName, studentComment}) => {
    return (
        <>
            <div className="student-card slide-item">
                <img src={studentImg} alt=""/>
                <h2>{studentName}</h2>
                <p>{studentComment}</p>
            </div>
        </>
    )
}

export default StudentCard