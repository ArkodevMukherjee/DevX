import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { FaBootstrap, FaCss3Alt, FaReact } from "react-icons/fa";
import { FaSquareJs } from 'react-icons/fa6';

const Stack = () => {
  return (
    <div className="m-5 mb-14">
      <h1 className="text-4xl pb-8">
        Frontend
      </h1>
      <div className="tool">
        <span className="inline-block align-middle mr-5">
          <SiHtml5 className="text-4xl" />
        </span>
        <span className="inline-block align-middle mr-5">
          <FaCss3Alt className="text-4xl" />
        </span>
        <span className="inline-block align-middle mr-5">
          <FaSquareJs className="text-4xl" />
        </span>
        <span className="inline-block align-middle mr-5">
          <FaReact className="text-4xl" />
        </span>
        <span className="inline-block align-middle mr-5">
          <FaBootstrap className="text-4xl" />
        </span>
      </div>
    </div>
  )
}

export default Stack
