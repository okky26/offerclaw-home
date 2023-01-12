import React from 'react'
import Card from '../card/card'
import { useSelector } from 'react-redux'
import { useFetchDataTech } from '../../customHook/useFetch/useFetchPost'
import {FaHeadphonesAlt, FaChevronRight} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const techPostContainer = () => {
    const dataTech = useSelector(state => state.data.dataPostPerCategory.dataTech)
    const loading = useSelector(state => state.loading.load)
    useFetchDataTech('https://www.offerclaw.com/index.php/wp-json/wp/v2/posts?_fields=title,excerpt,link,_links,date&per_page=4&order_by=date&order=desc&_embed&categories=7')

    console.log(dataTech)

  return (
    <section className='w-full h-full flex flex-col items-center justify-evenly gap-x-2'>
        <div className='w-full grid grid-cols-2 py-4'>
          <div className='w-fit flex items-center gap-x-2 py-2 px-3 bg-primary-post-cat rounded-full'>
            <IconContext.Provider value={{size : '20px', color : 'white'}}>
              <FaHeadphonesAlt/>
            </IconContext.Provider>
            <h2 className='text-md font-sans-serif text-white capitalize font-medium'>Tech</h2>
          </div>
          <a href='' className='w-full flex items-center justify-end gap-x-2'>
            <h2  className='text-l font-sans-serif text-neutral-800 capitalize font-mediums'>view all</h2>
              <IconContext.Provider value={{size : '16px'}}>
                <FaChevronRight/>
              </IconContext.Provider>
          </a>
        </div>
        <div className='w-full h-full grid grid-rows-4 gap-y-4 place-items-center'>
            {loading === false && dataTech.map((data, index) => {
                return(
                    <div key={index} className='w-full h-full flex items-center p-3 justify-around bg-white rounded-2xl'>
                        <Card dataCategories={data._embedded['wp:term'][0][0].name} dataTitle={data.title.rendered} dataDate={data.date} dataSource={data._embedded['wp:featuredmedia'][0].source_url}/>
                    </div>
                )
            })}
        </div>
    </section>
    
  )
}

export default techPostContainer