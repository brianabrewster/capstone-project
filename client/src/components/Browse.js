import React from 'react';
import StudentCard from './StudentCard';
import TeacherCard from './TeacherCard';

function Browse({students, teachers}) {

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

    return(
        <div>
            <h1>Browse...</h1>
           
            <h2>Teachers:</h2>
            <ul>{teacherList}</ul>

            <h2>Students:</h2>
            <ul>{studentList}</ul>
        </div>
    )
}

export default Browse;