import ResumeImg from '../assets/resume.jpg'
import KumaranResume from '../assets/Kumaran r.pdf'


const Resume = () => {

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img src={ResumeImg} alt="resume" className='w-[300px]' />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                    <p className='pb-5'>
                        You can view my resume <a href={KumaranResume} download={'kumaran_portfolio'} className='btn'>Download</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Resume