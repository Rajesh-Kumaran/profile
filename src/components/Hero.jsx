import HeroImg from '../assets/hero.png'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {

    const config = {
        subtitle: "I'm a React Front-End Developer",
        social: {
            github: "https://github.com/Rajesh-Kumaran",
            linkedin: "https://www.linkedin.com/in/rajesh-kumaran-927085207",
            instagram: "https://www.instagram.com/rajesh_kumaran26/"
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hi,<br />I'm Kumaran
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.social.github} target='_blank' className='pr-5 hover:text-white'>
                        <AiOutlineGithub size={40} />
                    </a>
                    <a href={config.social.linkedin} target='_blank' className='pr-5 hover:text-white'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                    <a href={config.social.instagram} target='_blank' className='hover:text-white'>
                        <AiOutlineInstagram size={40} />
                    </a>
                </div>
            </div>

            <img src={HeroImg} alt="Hero" className='md:w-1/3' />
        </section>
    )
}

export default Hero