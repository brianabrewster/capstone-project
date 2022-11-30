import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LessonCard({id, date, time, instrument, lesson, removeLesson, updateLesson}) {
    console.log(lesson)
    const history = useHistory()
    const [expand, setExpand] = useState(false)
    const [updatedDate, setUpdatedDate] = useState(date)
    const [updatedTime, setUpdatedTime] = useState(time)

    function expandForm() {
        setExpand(prev => !prev)
      }

    function handleLessonDelete() {
        fetch(`/lessons/${id}`, {
          method: "DELETE",
        });
        removeLesson(id);
      }

      function handleSubmit(e) {
        e.preventDefault();
        fetch(`/lessons/${id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"},
          body: JSON.stringify({
            date: updatedDate,
            time: updatedTime,
            instrument: instrument
          })
        })
        .then(r => r.json())
    .then(data => {
        updateLesson(data)
        history.push('/profile')
    })
        expandForm()
      }

    return(
        <div className='card'>
            <h2>{date}</h2>
            <h3>{time}</h3>
            <h3>{instrument}</h3>
            <button onClick={expandForm}>Edit Lesson Details</button>
            <button onClick={handleLessonDelete}>Cancel Lesson</button>
            <br></br>

        {expand &&
        <div onSubmit={handleSubmit}>
          <h4>Change your lesson details </h4>
          <form>
            <label>Date: </label>
            <input type="text" name="date" placeholder="Date" value={updatedDate} onChange={(e) => setUpdatedDate(e.target.value)}/>
            <br></br>
            <label>Time: </label>
            <input type="text" name="time" placeholder="Desired Time" value={updatedTime} onChange={(e) => setUpdatedTime(e.target.value)}/>
            <br></br>
            <button type="submit" className='button'>Submit Date/Time Changes</button><br></br>
          </form>
        </div>}
        </div>
    )
}

export default LessonCard;