import React, { useState } from 'react'

const App = () => {
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [random, setRandom] = useState()

  const changeMin = (e) => {
    setMin(Number(e.target.value))
  }
  const changeMax = (e) => {
    setMax(Number(e.target.value))
  }

  const generateNumber = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return (
    <div className=" center-cont gap-6 w-full">
      <h1 className="text-2xl font-bold ">Random Number</h1>
      <div className="center gap-5">
        <p className="border-b border-dashed border-gray-400 w-full">
          Random Number: {random}
        </p>
        <input
          type="number"
          placeholder="Enter a min number"
          onChange={changeMin}
          className="text-input"
        ></input>
        <input
          type="number"
          placeholder="Enter a max number"
          onChange={changeMax}
          className="text-input "
        ></input>
        <button className="btn" onClick={generateNumber}>
          Give a random number
        </button>
      </div>
    </div>
  )
}

export default App
