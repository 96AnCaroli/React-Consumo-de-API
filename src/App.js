import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {

  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl) //nos retorna una promesa
      .then(response => response.json()) //para que nos la muestre en .js ya que viene en .json
      .then((data) => {
        setcharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }


  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="PERSONAJES DE RICK Y MORTY" />

      <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );  
}

export default App;
