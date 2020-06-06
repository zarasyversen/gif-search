import React, {useState, useEffect} from 'react';
import './App.css';


function Search() {
  const [gif, setGif] = useState('');
  const [gifResult, setGifResult] = useState(null);


  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=zZnqZOboTbEjlNiNQya72nriefU8Qc9v`)
    .then((res) => res.json())
    .then((res) => {
      if (res.data[0]) {
        setGifResult(res.data[0].images.original.url)
      }

    })
   
  }, [gif])



  return (
    <div>
      <input
        type="text"
        value={gif}
        onChange={(event) => {
        setGif(event.target.value)
        }} 
      />
      {gifResult && 
        <img src={gifResult} />
      }
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
