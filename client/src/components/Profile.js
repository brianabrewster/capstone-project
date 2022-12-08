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
        currentUser={currentUser}
        // accepted={accepted} 
        // setAccepted={setAccepted}
        />
    })

    const teacherLessons = lessons.filter((lesson) => {
        return currentUser.name === lesson.teacher.name
    })

    const teacherLessonsList = teacherLessons?.map((lesson) => {
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
        currentUser={currentUser}
        // accepted={accepted} 
        // setAccepted={setAccepted}
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
        name={message.student.name}
        teacher={message.teacher}
        message={message}
        removeMessage={removeMessage}
        />
    })

    const studentMessages = messages.filter((message) => {
       return  currentUser.name === message.student.name
    })

    const studentMessageList = studentMessages?.map((message) => {
        return <MessageCard 
        key={message.id}
        id={message.id}
        to={message.to}
        from={message.from}
        body={message.body}
        student={message.student}
        name={message.student.name}
        teacher={message.teacher}
        message={message}
        removeMessage={removeMessage}
        />
    })



    return(
        <div className='profile'>
            <div className='col-1'>
            {currentUser?.is_student ? <h1>My Lesson Requests:</h1> : null }
            <br></br>
            <ul>{currentUser?.is_student ? myLessonsList : null}</ul> 
            </div> 
            <div className='col-2'>
            {currentUser?.is_student ? <h1>My Messages:</h1> : null }
            <br></br>
            <ul>{currentUser?.is_student ? studentMessageList : null}</ul>
            </div>
            <div className='col-3'>
            {currentUser?.is_student ? null : <h1>Messages Sent:</h1>}
            <ul>{currentUser?.is_student ? null : messageList}</ul>
            </div>
            <div className='col-4'>
            {currentUser?.is_student ? null : <h1>My Lesson Requests:</h1>}
            <ul>{currentUser?.is_student ? null : teacherLessonsList}</ul>
            </div>
        </div>
    )
}

export default Profile;