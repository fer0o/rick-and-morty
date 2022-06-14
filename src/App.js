import './App.css'
import React, { useEffect, useState } from 'react'
import Characters from './Components/Characters'
import Navbar from './Components/Navbar'
import Pagination from './Components/Pagination'

function App () {
  const [charaters, setCharaters] = useState([])
  const [info, setInfo] = useState({})
  const URL = 'https://rickandmortyapi.com/api/character'
  const fetchCharaacters = async URL => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setCharaters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }
  // pagination function previous
  const onPrevious = () => {
    fetchCharaacters(info.prev)
  }
  // pagination function next
  const onNext = () => {
    fetchCharaacters(info.next)
  }
  useEffect(() => {
    fetchCharaacters(URL)
  }, [])
  return (
    <div>
      <Navbar brand='Rick and Morty App' />
      <div>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters charaters={charaters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  )
}

export default App
