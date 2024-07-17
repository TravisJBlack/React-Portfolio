import { Link } from 'react-router-dom'
import portfolioImg from '../../public/images/portfolioImage.jpeg'

export default function AboutMe() {
    return (
        <div className={'bg-black text-white text-center'}>
            <div className="flex items-center ">
            <div className='flex justify-center items-center w-1/2'>
                <img className='rounded-full w-96'src={portfolioImg}></img>
            </div>
                <div className="w-1/2  bg-opacity-75">
                    <h1 className="p-4 text-4xl">Hi! I'm Travis </h1>
                    <h1 className="p-4 text-4xl">a full stack developer! </h1>
                    <p className="p-4"> I'm currently a stay at home dad. Always looking for new things to discover and learn. Currently taking classes at University of Texas at Austin. I'm looking forward to the new knowledge this course will provide me and the avenue to a new career path. If your still curious about me take a look at some of my work and resume.</p>
                 
                <Link
                  to='/Portfolio'
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  See my projects
                </Link>
             
                </div>
            </div>

        </div>
    )
}