import React from 'react'

const Characters = ({ charaters = [] }) => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {charaters.map((item, idx) => (
          <div key={idx}>
            {/* card */}
            <div className="flex flex-col border-2 p-2">
              <img src={item.image} alt="" />
              <h2 className="text-2xl font-bold border-b-2 border-black block text-center">
                <span>Name: </span>
                {item.name}
              </h2>
              <p className="text-sm block text-center">id: {item.id}</p>
              <p className="text-sm block text-center">
                Species: {item.species}
              </p>
              <p className="text-sm block text-center">Status: {item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
