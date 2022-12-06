import React from "react";

function MessageCard({ id, student, teacher, body, removeMessage, message }) {


  function handleMessageDelete() {
    fetch(`/messages/${id}`, {
      method: "DELETE",
    });
    removeMessage(id);
  }

  return (
    <div className="card">
      <h4>To: {student.name}</h4>
      <h4>From: {teacher.name}</h4>
      <p>{body}</p>
      <button onClick={handleMessageDelete}>Delete This Message</button>
    </div>
  );
}

export default MessageCard;