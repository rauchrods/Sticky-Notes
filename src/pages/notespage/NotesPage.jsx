import React, { useState } from "react";
import NoteCard from "../../components/noteCard/NoteCard";
import Controls from "../../components/controls/Controls";
import { useSelector } from "react-redux";

const NotesPage = () => {
  const notes = useSelector((state) => state.main.notes);

  console.log(notes);

  return (
    <>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}

      <Controls />
    </>
  );
};

export default NotesPage;
