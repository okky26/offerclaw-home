import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFetchPostBanner } from '../../customHook/useFetch/useFetchPost'
import {AiOutlineCalendar} from 'react-icons/ai'
import { IconContext } from 'react-icons'

const bannerCard = () => {
    const dataPostBanner = useSelector(state => state.data.dataPostBanner)
    const loading = useSelector(state => state.loading.load)
    const dispatch = useDispatch()

    useFetchPostBanner('https://www.offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,categories,date&per_page=1&order_by=date&order=asc&_embed')

    

  return (
    <div className='w-full h-full bg-white p-3 rounded-[16px]'>
        <div className='w-full h-full flex flex-col justify-start'>
            {loading === false && dataPostBanner.map((data, index) => {
                return(
                    <div key={index}>
                        <div className='w-full h-1/2 rounded-[12px] flex items-center justify-center pt-4'>
                            <img className='w-1/2 mx-auto aspect-auto object-contain rounded-[12px]' src={data._embedded['wp:featuredmedia'][0].source_url} alt="" />
                        </div>
                        <div className='w-full flex items-center px-2 mt-8'>
                            <h2 className='text-md bg-primary-cat-bg text-neutral-500 font-sans-serif py-1 px-3 rounded-md'>{data._embedded['wp:term'][0][0].name}</h2>
                        </div>
                        <h1 className='mt-2 px-2 text-2xl capitalize w-3/4 font-sans-serif font-bold text-primary-img-bg'>{data.title.rendered}</h1>
                        <div className='w-full flex items-center px-2 mt-2'>
                            <IconContext.Provider value={{size : '16px'}}>
                                <AiOutlineCalendar/>
                            </IconContext.Provider>
                            <h2 className='text-sm text-neutral-500 font-sans-serif'>{data.date}</h2>
                        </div>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default bannerCard