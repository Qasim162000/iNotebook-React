import React from "react";

function NoteItem(props) {
  const { title, description } = props.note;
  return (
    <div className="col-md-3 my-3">
      <div className="card" style={{ width: "18rem", textAlign: "center" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
