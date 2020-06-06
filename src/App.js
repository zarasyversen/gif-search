import React, {useState, useEffect} from 'react';
import './App.css';


function Search() {
  const [query, setQuery] = useState('');
  const [gifImage, setGifImage] = useState('');
  const [gifTitle, setGifTitle] = useState('');


  useEffect(() => {
    let isCurrent = true;
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zZnqZOboTbEjlNiNQya72nriefU8Qc9v`)
    .then((res) => res.json())
    .then((res) => {
      if (isCurrent && res.data[0]) {
        setGifImage(res.data[0].images.original.url)
        setGifTitle(res.data[0].title)
      }
    })
    return () => {
      // Clean up function like componentWillUnmount
      isCurrent = false;
    }
  }, [query])

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => {
        setQuery(event.target.value)
        }} 
      />
      {gifImage && 
        <img src={gifImage} alt={gifTitle} />
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
