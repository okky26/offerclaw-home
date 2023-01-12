import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { IconContext } from 'react-icons'
const card = ({dataCategories,dataTitle,dataDate,dataSource}) => {
  return (
    <>
      <div className='w-3/4 flex flex-col gap-y-2'>
        <div className='w-full flex items-center'>
          <h2 className='text-xs bg-primary-cat-bg text-neutral-500 font-sans-serif py-1 px-3 rounded-md'>{dataCategories}</h2>
        </div>
        <h2 className=' px-2 text-md capitalize w-full font-sans-serif font-bold text-primary-img-bg'>{dataTitle}</h2>
        <div className='w-full flex items-center gap-x-2'>
            <IconContext.Provider value={{size : '16px'}}>
                <AiOutlineCalendar/>
            </IconContext.Provider>
            <h2 className='text-xs text-neutral-500 font-sans-serif'>{dataDate}</h2>
        </div>
      </div>
      <div className='w-1/2 h-full flex items-center justify-center border-2 border-primary-post-cat/70 rounded-xl'>
        <img src={dataSource} alt="" className={`w-full h-full aspect-auto object-contain p-1`} />
      </div>
    </>
      
  )
}

export default card