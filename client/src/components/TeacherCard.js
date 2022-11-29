import React from "react";

function TeacherCard({name, age, city, experience, instruments, rate}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Instrument: {instruments}</p>
            <p>Experience: {experience}</p>
            <p>Rate: {rate}</p>
            <button>Request a Lesson</button>
        </div>
    )
}

export default TeacherCard;