import React, {useState} from 'react';
import './App.css';


function Search() {
  const [gif, setGif] = useState('');
  return (
    <div>
      <input
        type="text"
        value={gif}
        onChange={(event) => {
        setGif(event.target.value)
        }} 
      />
      Hello {gif}
    </div>
  )

}

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
