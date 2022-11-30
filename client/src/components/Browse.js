import React from 'react';
import StudentCard from './StudentCard';
import TeacherCard from './TeacherCard';

function Browse({students, teachers, isStudent, currentUser}) {

    const studentList = students.map((student) => {
        return <StudentCard 
        key={student.id}
        id={student.id}
        name={student.name}
        age={student.age}
        city={student.city}
        instruments={student.instruments}
        experience={student.experience}
        />
    })

    const teacherList = teachers.map((teacher) => {
        return <TeacherCard 
        key={teacher.id}
        id={teacher.id}
        name={teacher.name}
        age={teacher.age}
        city={teacher.city}
        instruments={teacher.instruments}
        experience={teacher.experience}
        rate={teacher.rate}
        />
    })
    console.log(currentUser)
    return(
        <div>
            <h1>Browse...</h1>
            <ul>{currentUser.is_student ? teacherList : studentList}</ul>
        </div>
    )
}

export default Browse;