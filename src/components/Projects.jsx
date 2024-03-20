import FlipClone from '../assets/flipclone.jpg'
import GymWeb from '../assets/gym-website.jpg'
import CryptoApp from '../assets/crypto-web.jpg'


function Projects() {

    const config = {
        projects: [
            {
                image: CryptoApp,
                description: "A website provides in-depth data about all the cryptocurrencies built using React JS, Redux Toolkit, and Rapid APIs.",
                link: 'https://cryptoversenews6.netlify.app'
            },
            {
                image: GymWeb,
                description: "A static gym website user can get the details of the gym, such as about the gym, contact details build with React JS, React Router and Email JS.",
                link: 'https://fit-gymclub.netlify.app'
            },
            {
                image: FlipClone,
                description: "Filpkart clone website cloned the basic design and features like add to cart build with React JS, Redux and for authentication I am using Supabase.",
                link: 'https://flipkartclone26.netlify.app'
            },
        ]
    }

    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                    <p>These are some of my best projects. I have built these with React, and vanilla CSS. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-8'>
                    {config.projects.map((project, index) => (
                        <div className='relative' key={index}>
                            <img src={project.image} className='h-[280px] w-[500px]' />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a href={project.link} target='_blank' className='btn'>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects