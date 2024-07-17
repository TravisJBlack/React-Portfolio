import { useState } from "react";

function ProjectList({ projectData , techData}) {
    const [showTitle, setShowTitle] = useState(new Array(projectData.length).fill("invisible"))

    const [showColor, setShowColor] = useState(new Array(projectData.length).fill('grayscale'))

    const [showTech, setShowTech] = useState(new Array(projectData.length).fill(''));

    const color = (e) => {
        const newColor = showColor.map((color, index) => {
            if (e.target.dataset.color == index) {
                return color === 'grayscale' ? '' : 'grayscale';
            }
            return color;

        });
        setShowColor(newColor);

        const populateTitle = showTitle.map((title, index) => {
            if (e.target.dataset.color == index) {
                return title === 'invisible' ? '' : 'invisible';
            }
            return title;

        })

        setShowTitle(populateTitle)
    }



    return (
        <>
            {projectData.map((project, index) =>

                <div key={index} className={`${showTech[index]}` }>
                    <a href={project.url} target="_blank" className='relative' >
                        <img data-color={index} className={`h-auto max-w-full rounded-lg shadow-lg shadow-red-500 hover:border-8 hover:border-red-900 ${showColor[index]}`}
                            onMouseEnter={color} onMouseLeave={color} src={project.imgPath} alt="" />
                         <p className={`text-black bg-red-500 bg-opacity-75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${showTitle[index]}`}>{project.name}</p>
                    </a>
                </div>
            )}
        </>
    )
}


export default ProjectList;