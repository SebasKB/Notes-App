import { MdDeleteForever } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import { useState } from 'react';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEditNote(id, editedText);
    setIsEditing(false);
  };

  return (
    <div className='note'>
      {isEditing ? (
        <>
          <input
            type='text'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveClick}>
            <BsPencil size='1.3em' />
          </button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className='delete-icon'
              size='1.3em'
            />
            <button onClick={handleEditClick}>
              <BsPencil size='1.3em' />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
