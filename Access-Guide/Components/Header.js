import React from 'react'

const Header = () => {
    return (
        <div className='max-w-[1000px] mx-auto flex items-center justify-between font-semibold text-xl text-[#89c6ff] pt-6'>
            <a className='py-1 px-4 hover:bg-[#DBCF9F]' href="#">Access Guide</a>
            <nav className='hidden md:block'>
                <a className='py-1 px-5 hover:bg-[#DBCF9F]' href="#">Glossary</a>
                <a className='py-1 px-5 hover:bg-[#DBCF9F]' href="#">Checklist</a>
                <a className='py-1 px-5 hover:bg-[#DBCF9F]' href="#">Contribute</a>
                <a className='py-1 px-5 hover:bg-[#DBCF9F]' href="#">About</a>
            </nav>
            <div className='sm:hidden px-4'>
                <a href="#">///</a>
            </div>
        </div>
    )
}

export default Header
