import React from 'react'
import * as fa from 'react-icons/fa'
import { IconContext } from 'react-icons'

const mobileHeader = () => {
  return (
    <header className='h-[20vh] bg-primary-head grid grid-rows-2 items-start content-center'>
        <section className='w-full flex items-center justify-center pt-6 px-12'>
            <IconContext.Provider value={{size : '26px', color : '#ffffff'}}>
                <fa.FaBars className=''/>
            </IconContext.Provider>
            <h2 className='text-3xl text-neutral-50 font-sans-serif font-bold uppercase mx-auto'>offerclaw</h2>
        </section>
        <form action='' className='w-full h-full flex items-start justify-center pb-6'>
            <input placeholder='Search' className='w-3/4 h-12 bg-neutral-50/75 backdrop-blur-sm rounded-[16px] pl-4 text-neutral-700' type="search" name="search" id="search" />
            <button type="submit" className='absolute right-14 p-4'>
                <fa.FaSearch/>
            </button>
        </form>
    </header>
  )
}

export default mobileHeader