import React, { useState } from "react";

import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
  // NOTES
  const [notes, setNotes] = useState([]);

  // ADD NOTE
  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  // DELETE NOTE
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((newNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            titulo={newNote.titulo}
            conteudo={newNote.conteudo}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
