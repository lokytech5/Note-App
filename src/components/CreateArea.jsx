import React, { useState } from "react";
import AddBoxIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false)
  const [noteText, setNoteText] = useState({
    title: " ",
    content: " "
  })

  function handleChangeEvent(event) {
    const { name, value } = event.target
    setNoteText((preValue) => {
      return {
        ...preValue, [name]: value
      }
    })
  }

  function handleClickEvent(event) {
    props.onAdd(noteText);
    setNoteText({
      title: " ",
      content: " "
    })
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  

  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input
          onChange={handleChangeEvent}
          name="title"
          placeholder="Title"
        /> : null}


        <textarea
          onClick={expand}
          onChange={handleChangeEvent}
          name="content"
          placeholder="Take a note..." rows={isExpanded ? 3 : 1} />


        <Zoom in={isExpanded}>
          <Fab onClick={handleClickEvent}>
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
