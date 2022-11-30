function LessonCard({date, time, instrument}) {
    return(
        <div>
            <h2>{date}</h2>
            <h3>{time}</h3>
            <h3>{instrument}</h3>
        </div>
    )
}

export default LessonCard;