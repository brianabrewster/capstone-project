import React from 'react';
import LessonCard from './LessonCard';

function Profile({lessons, removeLesson, updateLesson}) {
    console.log(lessons)
    const myLessonsList = lessons.map((lesson) => {
        return <LessonCard 
        key={lesson.id}
        id={lesson.id}
        date={lesson.date}
        time={lesson.time}
        instrument={lesson.instrument}
        lesson={lesson}
        removeLesson={removeLesson}
        updateLesson={updateLesson}
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