import AboutImg from '../assets/about.png'


const About = () => {

    const config = {
        line1: " Hi, My name is Kumaran. I am a React Front-End Web developer. I create responsive secure websites.",
        line2: "I built beautiful websites with React.js.",
        line3: "I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, CSS3 and many more.",
    }

    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="about" />
            </div>
            <div className='md:w-1/2 flex justify-center text-white'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='pb-5'>{config.line1}</p>
                    <p className='pb-5'>{config.line2}</p>
                    <p className='pb-10'>{config.line3}</p>
                </div>
            </div>
        </section>
    )
}

export default About