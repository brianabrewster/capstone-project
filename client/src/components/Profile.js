import React from 'react';
import LessonCard from './LessonCard';

function Profile({lessons, teachers, removeLesson, updateLesson, currentUser}) {
    // console.log(lessons)
    const myLessonsList = lessons?.map((lesson) => {
        return <LessonCard 
        key={lesson.id}
        id={lesson.id}
        date={lesson.date}
        time={lesson.time}
        instrument={lesson.instrument}
        lesson={lesson}
        removeLesson={removeLesson}
        updateLesson={updateLesson}
        teacherId={lesson.teacher_id}
        />
    })

    // let teacherLessonList = []



    return(
        <div>
            <h1>My Upcoming Lessons:</h1>
            <ul>{currentUser?.is_student ? myLessonsList : null}</ul>
        </div>
    )
}

export default Profile;