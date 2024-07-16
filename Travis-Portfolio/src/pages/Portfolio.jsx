import ProjectList from "../components/ProjectList";
import projects from '../utils/projectData';
import { useState } from "react";

import htmlLogo from '../../public/images/html.svg'
import cssLogo from '../../public/images/css.svg'
import javascriptLogo from '../../public/images/javascript.svg'
import mongodbLogo from '../../public/images/mongodb.svg'
import nodejsLogo from '../../public/images/nodejs.svg'
import postgresqlLogo from '../../public/images/postgresql.svg'
import webpackLogo from '../../public/images/webpack.svg'
import handlebarsLogo from '../../public/images/handlebars.svg'



export default function PortfolioPage() {

    const [projectData, setProjectData] = useState([...projects])
    const [scale, setScale] = useState(new Array(projectData.length).fill(''))

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
                    <p className="text-white text-center m-4">Feel free to take a look at some of the projects I have created in the past.</p>
                </div>

                <div className="flex items-center justify-center py-4 md:py-2 flex-wrap">
                    <button type="button" onClick={() => filterStack('')} className="text-blue-700 hover:text-white border border-blue-600 bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-black dark:text-white dark:hover:text-black dark:bg-red-900 dark:hover:border-white">All categories</button>
                    <button type="button" onClick={() => filterStack('frontend')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Frontend</button>
                    <button type="button" onClick={() => filterStack('backend')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Backend</button>
                    <button type="button" onClick={() => filterStack('fullStack')} className="text-gray-900 border border-white hover:border-gray-200 dark:border-black dark:hover:text-black dark:bg-red-900 dark:hover:border-white bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Full stack</button>
                </div>
                <div className="flex flex-wrap justify-center m-3 md:pb-3">
                    <button type='button'>
                        <img className='mx-1 w-12 h-12 shadow-lg shadow-red-500' onClick={() => filterTech('html')} src={htmlLogo} alt="image of html logo" />
                    </button>
                    <button type='button'>
                        <img className="mx-1 w-12 h-12 shadow-lg shadow-red-500" onClick={() => filterTech('css')} src={cssLogo} alt="image of css logo" />
                    </button>
                    <button type='button'>
                        <img className="mx-1 w-12 h-12 shadow-lg shadow-red-500" onClick={() => filterTech('javascript')} src={javascriptLogo} alt="image of javascript logo" />
                    </button>
                    <button type='button'>
                        <img className="mx-1 w-12 h-12 shadow-lg shadow-red-500" onClick={() => filterTech('mongodb')} src={mongodbLogo} alt="image of mongodb logo" />
                    </button>
                    <button type='button'>
                        <img className="mx-1 w-12 h-12 shadow-lg shadow-red-500" onClick={() => filterTech('nodejs')} src={nodejsLogo} alt="image of nodejs logo" />
                    </button>
                    <button type='button'>
                        <img className="mx-1 w-12 h-12 shadow-lg shadow-red-500" onClick={() => filterTech('postgresql')} src={postgresqlLogo} alt="image of postgresql logo" />
                    </button>
                    <button type='button'>
                        <img className="mx-1 w-12 h-12 shadow-lg shadow-red-500" onClick={() => filterTech('webpack')} src={webpackLogo} alt="image of webpack logo" />
                    </button>
                    <button type='button'>
                        <img className="mx-1 w-12 h-12 shadow-lg shadow-red-500" onClick={() => filterTech('handlebars')} src={handlebarsLogo} alt="image of webpack logo" />
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center 2xl:mx-80 xl:mx-36 mx-4">
                    <ProjectList projectData={projectData} />
                </div>
            </div>
        </>
    )
}