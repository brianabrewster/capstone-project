import React from "react";
import { Link } from "react-router-dom";

function TeacherCard({name, age, city, experience, instruments, rate}) {
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Instrument: {instruments}</p>
            <p>Experience: {experience}</p>
            <p>Rate: {rate}</p>
            <Link to='/newlesson'>
            <button>Request a Lesson</button>
            </Link>
        </div>
    )
}

export default TeacherCard;