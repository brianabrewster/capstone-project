import React from 'react';
import StudentCard from './StudentCard';
import TeacherCard from './TeacherCard';

function Browse({students, teachers, setStudents, setTeachers, currentUser}) {


    function handleChange(e) {
        let filteredTeachers = teachers.filter((teacher) => {
            return teacher.city === e.target.value
        })
        let filteredStudents = students.filter((student) => {
            return student.city === e.target.value
        })
        setTeachers(filteredTeachers);
        setStudents(filteredStudents);
    };

    const studentList = students?.map((student) => {
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

    const teacherList = teachers?.map((teacher) => {
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
    // console.log(currentUser)
  

    return(
        <div>
            <h1>Browse...</h1>
            <select
                name="cities"
                onChange={handleChange}>
                <option value="">Select your city...</option>
                <option value="Austin">Austin</option>
                <option value="Houston">Houston</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="New York">New York</option>
                <option value="Chicago">Chicago</option>
                <option value="Phoenix">Phoenix</option>
                <option value="Georgia">Georgia</option>
                <option value="Boston">Boston</option>
            </select>
            <ul>{currentUser?.is_student ? teacherList : studentList}</ul>
        </div>
    )
}

export default Browse;