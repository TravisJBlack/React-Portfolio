import ProjectList from "../components/ProjectList";
import projects from '../utils/projectData';
import { useState } from "react";

export default function PortfolioPage() {

    const [projectData, setProjectData] = useState([...projects])

    const filterStack = (group) => {
        if (group === "") {
            setProjectData(projects);
        } else {
            
            const filteredProjects = projects.filter(project => project.group === group);
            setProjectData(filteredProjects);
        }
    }

    
    const [showLogo, setShowLogo] = useState(false);

    const filterLogo = (logo) => {
        const logoFilter = projects.filter(project => project.technologies = logo);
    }
    
    

    return (
        <>
            <div className="min-h-screen bg-black">
                <div className="container mx-auto items-center">
                    <h1 className="text-white text-center text-3xl">My Projects:</h1>
                    <p className="text-white text-center m-4">Feel free to take a look at some of the projects I have created in the past.</p>
                </div>

                <div className="flex items-center justify-center py-4 md:py-2 flex-wrap">
                    <button type="button" onClick={() => filterStack('')} className="text-blue-700 hover:text-white border border-blue-600 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-black dark:text-white dark:hover:text-black dark:bg-red-900 dark:hover:border-white">All categories</button>
                    <button type="button" onClick={() => filterStack('frontend')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Frontend</button>
                    <button type="button" onClick={() => filterStack('backend')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Backend</button>
                    <button type="button" onClick={() => filterStack('fullStack')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Full stack</button>
                </div>
                <div className="flex flex-wrap justify-center m-3 md:pb-3">
                    <img className="w-12 h-12" onMouseLeave={e => console.log(e)} src="../../public/html.svg" alt="image of html logo" />
                    <img className="w-12 h-12" src="../../public/css.svg" alt="image of css logo" />
                    <img className="w-12 h-12" src="../../public/javascript.svg" alt="image of javascript logo" />
                    <img className="w-12 h-12" src="../../public/mongodb.svg" alt="image of mongodb logo" />
                    <img className="w-12 h-12" src="../../public/nodejs.svg" alt="image of nodejs logo" />
                    <img className="w-12 h-12" src="../../public/postgresql.svg" alt="image of postgresql logo" />
                    <img className="w-12 h-12" src="../../public/webpack.svg" alt="image of webpack logo" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center 2xl:mx-80 xl:mx-36 mx-4">
                    <ProjectList projectData={projectData}/>

                </div>
            </div>
        </>
    )
}