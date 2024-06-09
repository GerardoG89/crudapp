import React,{useState, useEffect} from 'react';
import './App.css';



function App() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editDescripcion, setEditDescripcion] = useState (null);
  const [editPrecio, setEditPrecio] = useState ('')


  useEffect(()=>{
    traerItems ();
  },[])

  const traerItems = async()=>{
    const response = await fetch('http://localhost:3002/api/traeritems')
    const data = await response.json();
    setItems(data);
  };

  const agregarItem = async()=>{
    const response = await fetch ('http://localhost:3002/appi/agregaritems',{

      method:'POST',
      headers:{
        'Content-Type':'aplication/json'
      },
      body: JSON.stringify({descripcion:editDescripcion,precio:editPrecio}),
      })
  };

  return (
    <div className="App">
      <header className="App-header">
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
