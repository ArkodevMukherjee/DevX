import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="w-4/5 m-auto">
        <h1 className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-950 to-pink-900">
          Contact
        </h1>
        <div className="input-component p-5 flex flex-col justify-center items-center">
          <input type="text" name="name" id="name" className="bg-gray-800 w-4/5 focus:outline-none rounded-lg p-2 m-7 round-4xl" placeholder="Name" />
          
          <input type="email" name="email" id="email" className="bg-gray-800 w-4/5 focus:outline-none rounded-lg p-2 m-7 round-4xl" placeholder="Email" />

          <input type="number" name="phone" id="phone" className="bg-gray-800 w-4/5 focus:outline-none rounded-lg p-2 m-7 round-4xl" placeholder="Phone Number" />
          <input type="description" name="description" id="description" className="bg-gray-800 w-4/5 focus:outline-none rounded-lg p-2 m-7 round-4xl" placeholder="Description" />

          <input type="submit" value="Submit" className="bg-violet w-20 p-2 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default Contact
