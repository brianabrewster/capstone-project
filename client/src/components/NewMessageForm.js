import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function NewMessageForm({ students, teachers, addNewMessage }) {

const history = useHistory();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/profile")
    fetch("/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: to,
          from: from,
          body: body,
          student_id: to,
          teacher_id: from
        }),
      })
        .then((r) => r.json())
        .then((data) => addNewMessage(data));
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Send a message:</h1>
         <label>To: </label>
          <select
            onChange={(e) => setTo(e.target.value)}
            value={to}
          >
            <option value="">Select a student</option>
            {students.map((student) => (
              <option key={student.name} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        <br></br>
        <label>From: </label>
          <select
            onChange={(e) => setFrom(e.target.value)}
            value={from}
          >
            <option value="">Select an instructor</option>
            {teachers.map((teacher) => (
              <option key={teacher.name} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
         <br></br>
        <textarea
          className="new-message"
          type="text"
          name="body"
          value={body}
          placeholder="Write your message..."
          onChange={(e) => setBody(e.target.value)}
        />
        <br></br>
        <button type="submit" className="button">
          Submit Request
        </button>
      </form>
    </div>
  );

}

export default NewMessageForm;