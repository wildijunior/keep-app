import React, { useState } from "react";

const Note = (props) => {
  const [cor, setCor] = useState(false);

  const mouseOver = () => {
    setCor(true);
  };

  const mouseOut = () => {
    setCor(false);
  };

  return (
    <div className="note">
      <h1>{props.titulo}</h1>
      <p>{props.conteudo}</p>
      <button
        onClick={() => props.onDelete(props.id)}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ borderRadius: "20px", background: cor ? "red" : null }}
      >
        Del
      </button>
    </div>
  );
};

export default Note;
