import React from 'react'

const Footer = () => {
    return (
        <footer className='max-w-full bg-[#D9E5E2]'>
            <div className='md:h-[70vh] bg-[#D9E5E2] max-w-[1000px] mx-auto py-[30px]'>
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='md:w-[320px] w-[420px] h-[389px] border bg-slate-900'></div>
                    <div className='md:w-[320px] w-[420px] h-[389px] border bg-slate-900'></div>
                    <div className='md:w-[320px] w-[420px] h-[389px] border bg-slate-900'></div>
                </div>
                <div className='md:max-w-[1000px] mx-auto flex items-center justify-center md:pt-12 pt-4'>
                    <div className='text-black'>
                        Made by <a className='underline' href="#">Alex Chen</a>. Buy them a <a className='underline' href="#">Ko-Fi</a>!
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
