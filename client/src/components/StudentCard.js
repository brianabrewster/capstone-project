import React from "react";
import { Link } from "react-router-dom";

function StudentCard({name, age, city, instruments, experience}) {
    return(
        <div className="card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Instrument: {instruments}</p>
            <p>Experience: {experience}</p>
            <Link to='/newmessage'>
            <button>Send a Message</button>
            </Link>
        </div>
    )
}

export default StudentCard;