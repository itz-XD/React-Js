import React from 'react'

const Home = () => {
    return (
        <section>
            <div className='max-w-[1000px] h-fit mx-auto mt-14 px-3'>
                <div className='text-lg'>
                    This page contains all guidelines tagged with:
                </div>
                <div className='border flex items-center justify-center w-fit mt-5 mb-10'>
                    <div className='h-14 w-14 bg-[#7168D5]'></div>
                    <h1 className='text-4xl font-bold py-3 px-8'>Code</h1>
                </div>
                <div className='text-lg'>
                    This refers to the coding of products and websites, specifically semantic markup, ARIA, HTML, CSS, and other relevant front-end technology.
                </div>
            </div>
        </section>
    )
}

export default Home
