import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "AI Girlfriend With JWT Authentication",
            description: "A full-stack web application that leverages AI to create a virtual girlfriend experience, featuring natural language processing and machine learning algorithms.",
            technologies: ["React", "Node.js", "Python", "TensorFlow"],
            link: "#",
            technologies: ["HTML","CSS","JavaScript", "Flask", "MongoDB"],
            link: "#"
        },
        {
            title: "Chat Application With JWT Authentication",
            description: "A real-time chat application that allows users to communicate instantly, featuring JWT authentication for secure user sessions and data privacy where people in groups can chat with each other.",
            technologies: ["HTML","CSS","JavaScript", "NodeJs", "ExpressJs", "MongoDB","Web Socket"],
            link: "#"
        }
    ];

    return (
        <div className="w-4/5 m-auto mb-20">
            <h1 className="text-4xl text-center font-bold p-5 pb-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-950 to-pink-900">
                Featured Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="bg-violet px-2 py-1 rounded text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects