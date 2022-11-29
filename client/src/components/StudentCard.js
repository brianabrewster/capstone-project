import React from "react";

function StudentCard({name, age, city, instruments, experience}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Instrument: {instruments}</p>
            <p>Experience: {experience}</p>
            <button>Send a Message</button>
        </div>
    )
}

export default StudentCard;