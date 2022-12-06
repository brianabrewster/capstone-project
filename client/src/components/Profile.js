import React from 'react';
import LessonCard from './LessonCard';
import MessageCard from './MessageCard';

function Profile({lessons, messages, removeLesson, updateLesson, currentUser, removeMessage}) {
    // console.log(lessons)
    const myLessonsList = lessons?.map((lesson) => {
        return <LessonCard 
        key={lesson.id}
        id={lesson.id}
        date={lesson.date}
        time={lesson.time}
        instrument={lesson.instrument}
        lesson={lesson}
        student={lesson.student}
        teacher={lesson.teacher}
        removeLesson={removeLesson}
        updateLesson={updateLesson}
        teacherId={lesson.teacher_id}
        />
    })

    const messageList = messages?.map((message) => {
        return <MessageCard 
        key={message.id}
        id={message.id}
        to={message.to}
        from={message.from}
        body={message.body}
        student={message.student}
        teacher={message.teacher}
        message={message}
        removeMessage={removeMessage}
        />
    })



    return(
        <div>
            {currentUser?.is_student ? <h1>My Lesson Requests:</h1> : null }
            <ul>{currentUser?.is_student ? myLessonsList : null}</ul>

            {currentUser?.is_student ? null : <h1>Messages Sent:</h1>}
            <ul>{currentUser?.is_student ? null : messageList}</ul>
        </div>
    )
}

export default Profile;