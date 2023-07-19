import { collection, getDocs, addDoc } from "firebase/firestore/lite"
import { useEffect, useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore/lite";
import db from "./Base"

import editImg from '../public/edit.png'
import deleteImg from '../public/delete.jpg'


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const getDate = async () => {
    const snapShot = await getDocs(collection(db, 'todos'));
    let todos = [];
    snapShot.forEach(doc => {
      todos.push({ title: doc.data(), id: doc.id })
    })
    setTodos([todos])
  }

  useEffect(() => {
    getDate()
  }, [])




  const [editingID, setEditingID] = useState('')
  const [editing, setEditing] = useState(false)
  const [completed, setCompleted] = useState('')


  async function Submit(e) {
    e.preventDefault();
    if (input) {
      if (editing) {
        try {
          await updateDoc(doc(db, 'todos', editingID), {
            title: input
          })
        } catch (error) {
          console.log(error);
        }
        hideWithTime('Item is Edited')
      } else {
        try {
          const docRef = await addDoc(collection(db, "todos"), {
            title: input
          });
          hideWithTime('Item added to the list')
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      setEditing(false)
      setEditingID('')
      setInput('')
      getDate()
    }

  }


  async function edit(i) {
    setEditing(true);
    setInput(i.title.title)
    setEditingID(i.id)
  }

  async function deleteTodo(id) {
    await deleteDoc(doc(db, "todos", id));
    await hideWithTime('Item Removed')
    getDate()
  }

  function clearItems() {
    todos.map(a => a.map(p => deleteTodo(p.id)))
    hideWithTime('Empty List')
    getDate()
  }

  function hideWithTime(text) {
    setCompleted(text)
    setTimeout(() => {
      setCompleted('')
    }, 2000);
  }


  return (
    <div className="container">
      <p id="completed" style={completed.includes('Removed') || completed.includes('Empty') ? { background: '#F8D7DA' } : { background: '#D4EDDA' }}>{completed}</p>
      <h1 style={{ textAlign: 'center' }}>Grocery Bud</h1>

      <form onSubmit={Submit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="e.g. eggs" />
        <button type="submit">{editing ? 'Edit' : "Submit"}</button>
      </form>

      <ul>
        {todos?.map((t, ind) => t.map(p => <li key={p.id}>{p.title.title} <img src={editImg} id="edit" onClick={() => edit(p)} /> <img src={deleteImg} id="delete" onClick={() => deleteTodo(p.id)} /></li>))}
      </ul>

      {todos.length ? <p id="clearItems" onClick={() => clearItems()}>Clear Items</p> : null}
    </div>
  )
}

export default App