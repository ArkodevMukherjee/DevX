import React from 'react'
import Stack from './Stack'
import { SiC, SiCplusplus, SiExpress, SiFastapi, SiFlask, SiHtml5, SiJavascript, SiLangchain, SiNumpy, SiPandas, SiPython, SiPytorch, SiScikitlearn, SiTensorflow } from "react-icons/si";
import { FaBootstrap, FaCss3Alt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { FaSquareJs } from 'react-icons/fa6';
import { DiDjango } from 'react-icons/di';
import { RiGeminiLine } from 'react-icons/ri';

const Stacks = () => {
  return (
    <div>
      <div className="w-4/5 m-auto p-10 mb-5">
        <div className="m-5 mb-14">
          <h1 className="text-4xl pb-8 text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-950 to-pink-900">
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
        <div className="m-5 mb-14">
          <h1 className="text-4xl pb-8 text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-950 to-pink-900">
            Backend
          </h1>
          <div className="tool">
            <span className="inline-block align-middle mr-5">
              <SiFlask className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <FaNodeJs className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <DiDjango className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiFastapi className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiExpress className="text-4xl" />
            </span>
          </div>
        </div>
        <div className="m-5 mb-14">
          <h1 className="text-4xl pb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-950 to-pink-900">
            Generative AI
          </h1>
          <div className="tool">
            <span className="inline-block align-middle mr-5">
              <SiLangchain className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <RiGeminiLine className="text-4xl" />
            </span>
          </div>
        </div>
        <div className="m-5 mb-14">
          <h1 className="text-4xl pb-8 text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-950 to-pink-900">
            Machine Learnining and Deep Learning
          </h1>
          <div className="tool">
            <span className="inline-block align-middle mr-5">
              <SiScikitlearn className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiNumpy className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiPandas className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiTensorflow className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiPytorch className="text-4xl" />
            </span>
          </div>
        </div>
        <div className="m-5 mb-14">
          <h1 className="text-4xl pb-8 text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-950 to-pink-900">
            Programming Languages
          </h1>
          <div className="tool">
            <span className="inline-block align-middle mr-5">
              <SiC className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiPython className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <FaJava className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiCplusplus className="text-4xl" />
            </span>
            <span className="inline-block align-middle mr-5">
              <SiJavascript className="text-4xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stacks
