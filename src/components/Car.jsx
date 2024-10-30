import React, { useState } from 'react'


const Car = () => {

  const [car, setCar] = useState({
    "model": "BMW",
    "year": 2024,
    "make": "germany"
  })

  return (
    <div>
      <input type="text" className="mb-2 " value={car.model} />
      <button type="button" className="text-white bg-blue-700"
        onClick={() => setCar({
          ...car,
          "model": "Toyouta",
        })}>Model</button>


      <input type="number" value={car.year}
        onChange={(e) => setCar(prevcar => ({ ...prevcar, "year": e.target.value }))}
      />

      <input type="text" className="mb-2  dark:focus:border-blue-500" value={car.year} />
      <button type="button" className="text-white bg-blue-700" onClick={() => setCar({
        ...car,
        "make": "Italy",
      })} >Make</button>

    </div>
  )
}

export default Car
