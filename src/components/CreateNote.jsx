import React, { useState } from "react";

const CreateNote = (props) => {
  // MUDAR COR
  const [cor, setCor] = useState(false);

  const mouseOver = () => {
    setCor(true);
  };

  const mouseOut = () => {
    setCor(false);
  };

  // NOTES
  const [notes, setNotes] = useState({
    titulo: "",
    conteudo: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNotes((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    props.onAdd(notes);
    event.preventDefault();
    setNotes({
      titulo: "",
      conteudo: "",
    });
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="titulo"
          placeholder="Título"
          value={notes.titulo}
        />
        <textarea
          onChange={handleChange}
          type="text"
          name="conteudo"
          placeholder="Nota ..."
          value={notes.conteudo}
        />
        <button
          onClick={handleClick}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          style={{ background: cor ? "green" : null }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
