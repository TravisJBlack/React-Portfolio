import ProjectList from "../components/ProjectList";
import projects from '../utils/projectData';
import logos from '../utils/logoData';

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

    const filterTech = (tech) => {
        const techList = projects.filter(project => (project.technologies.includes(tech)));
        setProjectData(techList);


    }

    return (
        <>
            <div className="min-h-screen bg-black">
                <div className="container mx-auto items-center">
                    <h1 className="text-white text-center text-3xl">My Projects:</h1>
                    <p className="text-white text-center m-4 mb-0">Feel free to take a look at some of the tehcnologies and projects personaly built below.</p>
                    <p className="text-white text-center ">(Most sites are deployed using render free service and are spun down due to inactivity)</p>
                
                </div>
                <div className="flex flex-wrap justify-center m-3 md:pb-3">
                    {logos.map((logo, index) =>
                            <img key={index} className='mx-2 w-12 h-12 shadow-lg shadow-red-500 hover:scale-150 transition duration-500' onMouseEnter={() => filterTech(logo.name)} src={logo.image} alt={logo.alt} />
                    )}
                </div>
                <div className="flex items-center justify-center py-4 md:py-2 flex-wrap">
                    <button type="button" onClick={() => filterStack('')} className="text-blue-700 hover:text-white border border-blue-600 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-black dark:text-white dark:hover:text-black dark:bg-red-900 dark:hover:border-white">All categories</button>
                    <button type="button" onClick={() => filterStack('frontend')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Frontend</button>
                    <button type="button" onClick={() => filterStack('backend')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Backend</button>
                    <button type="button" onClick={() => filterStack('fullStack')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Full stack</button>
                </div>
               
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center 2xl:mx-80 xl:mx-36 mx-4">
                    <ProjectList projectData={projectData} />
                </div>
            </div>
        </>
    )
}