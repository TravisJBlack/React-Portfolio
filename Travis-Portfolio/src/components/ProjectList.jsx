import { useState } from "react";

function ProjectList({ projectData }) {    
    const [showTitle, setShowTitle] = useState(false)

    return (
        <>
           {projectData.map(project =>
        <div key={project.id} onMouseEnter={(e) =>setShowTitle(true)} onMouseLeave={(e) => setShowTitle(false)}>
        <a href={project.url} className="relative" >
                <img className="h-auto max-w-full rounded-lg  hover:border-8 hover:border-red-900" src={project.imgPath} alt="" />
        {showTitle ?<p className="text-black bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{project.name}</p>: null}
        </a>
        </div> )}   
        </>
    )
}
export default ProjectList;