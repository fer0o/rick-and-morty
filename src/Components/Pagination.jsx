import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious()
  }
  const handleNext = () => {
    onNext()
  }
  return (
    <div>
      <div className="flex flex-row space-x-8 m-8 justify-center">
        {prev ? (
          <button
            className="border-2 rounded-xl border-white bg-black text-white text-lg p-4 hover:bg-white hover:text-black hover:border-2 hover:border-black"
            onClick={handlePrevious}
          >
            Previous 👈🏻
          </button>
        ) : null}
        {next ? (
          <button
            className="border-2 rounded-xl border-white bg-black text-white text-lg p-4 hover:bg-white hover:text-black hover:border-2 hover:border-black"
            onClick={handleNext}
          >
            Next 👉🏻
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Pagination
