import emailjs from '@emailjs/browser'
import { useState } from 'react';

import linkedinLogo from '../../public/images/linkedin.svg'
import githubLogo from '../../public/images/github-mark.svg'


export default function ContactPage() {
    const [open, setOpen] = useState(false);
    const sendEmail = (event) => {
        event.preventDefault();
        console.log('working');
        emailjs.sendForm(import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID, import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE, event.target, { publicKey: import.meta.env.VITE_REACT_APP_EMAIL_PUBLICKEY, })
            .then(
                () => {
                    alert("Thanks for contacting me!");
                },
                (error) => {
                    alert('Email failed to send.');
                },
            );

    }

    return (
        <>
            <section className="bg-white dark:bg-black">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me</h2>
                    <div className='flex flex-wrap justify-center '>
                    <a href="https://www.linkedin.com/in/travis-black-b262681ab/">
                        <img className="m-2 w-12 h-12 shadow-lg shadow-red-500 " src={linkedinLogo} alt="image of linkedin logo" />
                    </a>
                    <a href="https://github.com/TravisJBlack">
                        <img className="m-2 w-12 h-12 shadow-lg shadow-red-500" src={githubLogo} alt="image of javascript logo" />
                    </a>
                    </div>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Look forward to hearing from you!</p>
                    <form action="#" className="space-y-8" onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email_from" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" name="email_subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </>
    )
}