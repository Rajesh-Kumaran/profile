

const Contact = () => {

    const config = {
        email: "rajeshkumaran2609@gmail.com",
        phone: "+91 8189-871297"
    }

    return (
        <section className='flex flex-col bg-primary px-5 py-32 text-white' id="contact">
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>
                    If you want to discuss more in detail, please contact me
                </p>
                <p className="py-2"><span className="font-bold">Email: </span><a href="mailto:rajeshkumaran2609@gmail.com">{config.email}</a></p>
                <p className="py-2"><span className="font-bold">Phone: </span><a href="tel:+918189871297">{config.phone}</a></p>
            </div>
        </section>
    )
}

export default Contact