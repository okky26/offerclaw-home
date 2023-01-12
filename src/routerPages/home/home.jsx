import React from 'react'
import Banner from '../../components/banner/banner'
import CardCarousel from '../../components/card/cardCarousel'
import TechPostContainer from '../../components/container/techPostContainer'
import HomePostContainer from '../../components/container/homePostContainer'
import { AiOutlineFire } from 'react-icons/ai'
import { FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const home = () => {

  return (
    <main className='bg-primary-bg px-6'>
      <article className='h-[50vh] flex flex-col items-center gap-y-4'>
        <section className='w-full grid grid-cols-2 border-b-2 border-neutral-50/50 py-4'>
          <div className='w-full flex items-center gap-x-2'>
            <IconContext.Provider value={{size : '22px'}}>
              <AiOutlineFire/>
            </IconContext.Provider>
            <h2 className='text-l font-sans-serif text-neutral-800 capitalize font-bold'>featured post</h2>
          </div>
          <a href='' className='w-full flex items-center justify-end gap-x-2'>
            <h2  className='text-l font-sans-serif text-neutral-800 capitalize font-mediums'>view all</h2>
              <IconContext.Provider value={{size : '16px'}}>
                <FaChevronRight/>
              </IconContext.Provider>
          </a>
        </section>
        <Banner/>
      </article>
      <article className='h-[40vh] flex items-center justify-start overflow-hidden mt-8'>
        <CardCarousel/>
      </article>
      <article className='h-[75vh] mt-8'>
        <TechPostContainer/>
      </article>
      <article className='h-[75vh] mt-8'>
        <HomePostContainer/>
      </article>
    </main>
  )
}

export default home