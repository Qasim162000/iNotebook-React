import { useContext } from "react";
import NoteContext from "./context/notes/NoteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const { notes, setNotes } = useContext(NoteContext);
  return (
    <div className="row">
      <h1>Your Notes</h1>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
}

export default Notes;
