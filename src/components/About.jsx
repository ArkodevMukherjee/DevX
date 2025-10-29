import React from 'react'
import image from "../assets/image.gif";

const About = () => {
    return (
        <div>
            <div className="w-4/5 m-auto mb-40 flex flex-row md:flex-wrap lg:flex-nowrap gap-10 items-center justify-center">
                <div className="left">
                    <h1 className="text-4xl text-center font-bold p-5 pb-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-pink-950">
                        About Me
                    </h1>
                    <p className="text-lg leading-relaxed">
                        Hello! I'm a passionate full-stack developer with expertise in modern web technologies.
                        With over 5 years of experience in building scalable web applications, I specialize in
                        React.js, Node.js, and cloud technologies.
                    </p>

                    <p className="mt-4 text-lg leading-relaxed">
                        My journey in software development began with a curiosity for creating interactive web experiences.
                        Today, I focus on building elegant solutions that combine clean code with exceptional user experiences.
                        When I'm not coding, you'll find me contributing to open-source projects and mentoring aspiring developers.
                    </p>

                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold mb-3">Skills & Expertise</h2>
                        <ul className="grid grid-cols-2 gap-2">
                            <li>• React.js</li>
                            <li>• Node.js</li>
                            <li>• TypeScript</li>
                            <li>• MongoDB</li>
                            <li>• AWS</li>
                            <li>• Docker</li>
                        </ul>
                    </div>
                </div>

                <div className="right hidden lg:block">
                    <img src={image} alt="Profile" className="h-[400px] w-[2/5] hidden lg:block" />
                </div>
            </div>
        </div>
    )
}

export default About