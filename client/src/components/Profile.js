import React from 'react';
import LessonCard from './LessonCard';

function Profile({lessons, students, teachers}) {

    const myLessonsList = lessons.map((lesson) => {
        return <LessonCard 
        key={lesson.id}
        id={lesson.id}
        date={lesson.date}
        time={lesson.time}
        instrument={lesson.instrument}
        />
    })

    return(
        <div>
            <h1>My Upcoming Lessons:</h1>
            <ul>{myLessonsList}</ul>
        </div>
    )
}

export default Profile;