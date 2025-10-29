import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className="flex flex-wrap p-10 m-5">
      <h1 className="text-2xl pb-10 font-bold">
        {title}
      </h1>
      <p className="text-2/5">
        {description}
      </p>
    </div>
  )
}

export default Card
