import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    console.log(newNote);
    setNotes(preValue => {
      return [...preValue, newNote]
    })
  }

  function deleteNotes(id) {
    setNotes(preValue => {
      return preValue.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteItems, index) => {
        return <Note
          key={index}
          id={index}
          title={noteItems.title}
          content={noteItems.content}
          deleteNote={deleteNotes}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
