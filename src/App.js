import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  }

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((value, ind) => {
        return ind !== id;
      })
    );
  }

  return <>
    <Header />
    <CreateNote passNote={addNote} />
    {addItem.map((val, index) => {
      return (
        <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
      )
    })}
    <Footer />
  </>
};

export default App;
