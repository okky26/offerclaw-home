import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchPopularPost } from '../../customHook/useFetch/useFetchPost'
import {AiOutlineCalendar} from 'react-icons/ai'
import { IconContext } from 'react-icons'

const cardCarousel = () => {
    const dataPopularPost = useSelector(state => state.data.dataPopularPost)
    const loading = useSelector(state => state.loading.load)
    const bannerCounter = useSelector(state => state.bannerCounter.counter)

    useFetchPopularPost('https://www.offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,categories,date&per_page=4&page=2&order_by=date&order=asc&_embed')

  return (
    <section className='w-full h-full grid grid-flow-col auto-cols-max gap-4 overflow-scroll snap-x snap-mandatory'>
        {loading === false && dataPopularPost.map((data,index) => {
            return(
                <div key={index} className='w-60 h-full bg-white rounded-2xl'>
                    <div className='w-full h-1/2 rounded-[12px] flex items-center justify-center pt-4'>
                        <img className='w-1/2 mx-auto aspect-auto object-contain rounded-[12px]' src={data._embedded['wp:featuredmedia'][0].source_url} alt="" />
                    </div>
                    <div className='w-full flex items-center px-2 mt-8'>
                            <h2 className='text-sm bg-primary-cat-bg text-neutral-500 font-sans-serif py-1 px-2 rounded-md'>{data._embedded['wp:term'][0][0].name}</h2>
                        </div>
                        <h2 className='mt-2 px-4 text-sm capitalize w-full font-sans-serif font-bold text-primary-img-bg'>{data.title.rendered}</h2>
                        <div className='w-full flex items-center px-4 mt-8 gap-x-3'>
                            <IconContext.Provider value={{size : '16px'}}>
                                <AiOutlineCalendar/>
                            </IconContext.Provider>
                            <h2 className='text-xs text-neutral-500 font-sans-serif'>{data.date}</h2>
                        </div>
                </div>
            )
        })   
        }
    </section>
  )
}

export default cardCarousel