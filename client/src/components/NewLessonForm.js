import React, { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';

function NewLessonForm({students, teachers, addLesson, currentUser, accepted}) {

  const {id} = useParams();

  const currentTeacher = teachers.find((teacher) => teacher.id === parseInt(id))
  
    const history = useHistory();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [instrument, setInstrument] = useState("");
    const [studentName, setStudentName] = useState(currentUser.id);
    const [teacherName, setTeacherName] = useState(currentTeacher.id);

  

    function handleSubmit(e) {
        e.preventDefault();
        history.push("/profile")
        fetch("/lessons", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: date,
              time: time,
              instrument: instrument,
              accepted: accepted,
              student_id: studentName,
              teacher_id: teacherName
            }),
          })
            .then((r) => r.json())
            .then((data) => addLesson(data));
        }

    
    return(
        <div onSubmit={handleSubmit}>
        <h1>Schedule a lesson</h1>
        <form className="form">
          <label>Date: </label>
          <input
            type="text"
            name="date"
            placeholder="Desired Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br></br>
          <label>Time: </label>
          <input
            type="text"
            name="time"
            placeholder="Desired Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br></br>
          <label>Instrument: </label>
          <input
            type="text"
            name="instrument"
            placeholder="Instrument"
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          />
          <br></br>
          <label>Instructor: </label>
          <select
            onChange={(e) => setTeacherName(e.target.value)}
            value={teacherName}
          >
            <option value={currentTeacher.id}>{currentTeacher.name}</option>
            {teachers.map((teacher) => (
              <option key={teacher.name} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
          <br></br>
          <label>Student: </label>
          <select
            onChange={(e) => setStudentName(e.target.value)}
            value={studentName}
          >
            <option value={currentUser.id}>{currentUser.name}</option>
            {students.map((student) => (
              <option key={student.name} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
          <br></br>
        <button type="submit" className="button">
          Submit Request
        </button>
      </form>
        </div>
    )
}

export default NewLessonForm;