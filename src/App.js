// App.js

import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Login from './components/Login';

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        {loggedIn ? (
          <>
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText} />
            <NotesList
              notes={notes.filter((note) =>
                note.text.toLowerCase().includes(searchText)
              )}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
              handleEditNote={editNote}
            />
          </>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
