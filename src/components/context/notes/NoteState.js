import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6323c0168ded4d1656aec559",
      user: "631b517cccff30cb0760da25",
      title: "My Title",
      description: "Please wake up early brudda",
      tag: "personal",
      date: "2022-09-16T00:15:18.422Z",
      __v: 0,
    },
    {
      _id: "6323c0168ded4d1656aec559",
      user: "631b517cccff30cb0760da25",
      title: "My Title",
      description: "Please wake up early brudda",
      tag: "personal",
      date: "2022-09-16T00:15:18.422Z",
      __v: 0,
    },
    {
      _id: "6323c0168ded4d1656aec559",
      user: "631b517cccff30cb0760da25",
      title: "My Title",
      description: "Please wake up early brudda",
      tag: "personal",
      date: "2022-09-16T00:15:18.422Z",
      __v: 0,
    },
    {
      _id: "6323c0168ded4d1656aec559",
      user: "631b517cccff30cb0760da25",
      title: "My Title",
      description: "Please wake up early brudda",
      tag: "personal",
      date: "2022-09-16T00:15:18.422Z",
      __v: 0,
    },
    {
      _id: "6323c0168ded4d1656aec559",
      user: "631b517cccff30cb0760da25",
      title: "My Title",
      description: "Please wake up early brudda",
      tag: "personal",
      date: "2022-09-16T00:15:18.422Z",
      __v: 0,
    },
    {
      _id: "6323c0168ded4d1656aec559",
      user: "631b517cccff30cb0760da25",
      title: "My Title",
      description: "Please wake up early brudda",
      tag: "personal",
      date: "2022-09-16T00:15:18.422Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
