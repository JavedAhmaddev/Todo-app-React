import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      /* console.log(snapshot.docs.map(doc => doc.data())); */
      setTodos(snapshot.docs.map(doc => ({id:doc.id , todo:doc.data().todo})));
    })
  }, [])

  const addtodo = (event) => {
    event.preventDefault(); // will prevent REFRESH
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }
  return (
    <div className="App">

      <h1> Welcome to TODO List! </h1>
      <form>

        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addtodo} variant="contained" color="primary">Add Todo</Button>

      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;