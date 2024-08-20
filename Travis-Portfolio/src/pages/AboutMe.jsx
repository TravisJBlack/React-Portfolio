import { Link } from 'react-router-dom'
import portfolioImg from '../../public/images/portfolioImage.jpeg'

export default function AboutMe() {
    return (
        <div className={'bg-black text-white text-center'}>
            <div className="flex items-center m-4">
                <div className='flex justify-center items-center hidden sm:block sm:w-1/2'>
                    <img className='rounded-full w-96' src={portfolioImg}></img>
                </div>
                <div className="sm:w-1/2  bg-opacity-75">
                    <h1 className=" text-4xl">Hi! I'm Travis, </h1>
                    <h1 className=" text-4xl">a full stack developer! </h1>
                    <div className='flex justify-center sm:hidden m-2'>
                    <img className='rounded-full h-44' src={portfolioImg}></img>
                    </div>
                    <p className="p-4">Hi there! I'm a passionate and dedicated full stack developer with a unique background as a stay-at-home dad. After spending valuable years raising my family and managing our household, I decided to channel my problem-solving skills and creativity into a new career in tech. I recently completed the UT Austin Fullstack Coding certification, where I honed my skills in web development, including the MERN stack, and discovered a deep love for coding and building dynamic, user-friendly applications. </p>
                    <p className='p-4'>Transitioning from home life to tech has given me a fresh perspective on problem-solving, time management, and collaboration. I bring a strong work ethic, adaptability, and a keen eye for detail to every project I undertake. Whether it's developing responsive websites or crafting intuitive user interfaces, I'm excited to contribute my skills and continue growing in this ever-evolving field. </p>
                    <p className='p-4'>When I'm not coding, you can find me enjoying quality time with my family, exploring the latest tech trends, or tackling a new DIY project around the house. I'm eager to connect with others in the industry and embark on this exciting new chapter of my career.</p>

                    <Link
                        to='/Portfolio'
                        className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        See my projects
                    </Link>

                </div>
            </div>

        </div>
    )
}