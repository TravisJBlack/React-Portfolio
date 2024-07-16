import resume from '../../public/images/TravisResume.pdf'

export default function Resume() {
    return (
        
            <div className="bg-black  flex flex-wrap justify-center">
                <iframe src={resume} className="h-screen w-11/12"/>
            </div>
        )
};
    
