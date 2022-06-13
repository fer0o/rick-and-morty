import './App.css'
import React, { useEffect, useState } from 'react'
import Characters from './Components/Characters'
import Navbar from './Components/Navbar'

function App () {
  const [charaters, setCharaters] = useState([])
  const URL = 'https://rickandmortyapi.com/api/character'
  const fetchCharaacters = async URL => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setCharaters(data.results))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchCharaacters(URL)
  }, [])
  return (
    <div>
      <Navbar brand='Rick and Morty App' />
      <div>
        <Characters charaters={charaters} />
      </div>
    </div>
  )
}

export default App
