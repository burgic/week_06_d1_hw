import './App.css';
import React, {useState} from 'react';

function App() {
  const [items, setItems] = useState([
    {name: "Take Dog Out", highPriority: true},
    {name: "Clean Fridge", highPriority: false},
    {name: "Walk", highPriority: true}
  ]);

  const[newItem, setNewItem] = useState('');

  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [... items];
    copyItems.push({name: newItem});
    setItems(copyItems);
    setNewItem('');
  }

  const addItem = (index) => {
    const copyItems = [...items];
    copyItems[index].highPriority = true;
    setItems(copyItems);
  }

  const itemNodes = items.map((item, index) => {
    return(
      <li key={index} className={item.highPriority ? 'high-priority' : 'low-priority' }>
        <span>{item.name}</span>
        {/* {item.highPriority ? <span className = 'high-priority'>High Priority</span> :
        <button onClick={ () => addItem(index)}>Banana</button>} */}
      </li>
    )
  })

  return (
    <div className="toDoList">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveNewItem}>
        <label htmlFor='new-item'>Add new item</label>
        <input id="new-item" type='text' value={newItem} onChange={handleItemInput}/>
        <input type='submit' value='Save New Item'/>
        
      </form>

    </div>

  );
}

export default App;
