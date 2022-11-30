import React, { useState } from "react";

function NewLessonForm({students, teachers, addLesson}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [instrument, setInstrument] = useState("");
    const [studentName, setStudentName] = useState("");
    const [teacherName, setTeacherName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/lessons", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              date: date,
              time: time,
              instrument: instrument,
              teacher_id: parseInt(teacherName),
              student_id: parseInt(studentName),
            }),
          })
            .then((r) => r.json())
            .then((data) => addLesson(data[0]));
        }

    
    return(
        <div>
        <h2>Schedule a lesson</h2>
        <form onSubmit={handleSubmit}>
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
            <option value="">Select an instructor</option>
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
            <option value="">Select a student</option>
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