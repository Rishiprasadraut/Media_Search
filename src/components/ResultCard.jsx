import React from 'react'
import { useDispatch } from 'react-redux'
import {addCollection,addedToast} from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {
  const dispatch = useDispatch()

 const addToCollection = (item)=>{
         dispatch(addCollection(item))
         dispatch(addedToast())

 }


  return (
    <div className='w-[90vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] h-60 sm:h-72 md:h-80 bg-white rounded-xl overflow-hidden relative'>
    <a target="_blank" className='h-full' href={item.url}>

      {item.type == "photo" ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.type} />:""}
      {item.type == "video" ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}>hii</video>:""}
      {item.type == "GIF" ? <img className='h-full w-full object-cover object-center' src={item.src} alt={item.type} />:""}
     </a>
    <div id='bottom' className='flex justify-center items-center gap-2 sm:gap-4 w-full px-2 sm:px-4 py-3 sm:py-6 absolute bottom-0 text-white '>
      <h2 className='text-sm sm:text-base md:text-lg font-semibold capitalize h-10 sm:h-12 md:h-14 overflow-hidden'>{item.title}</h2>
        <button
        onClick={()=>{
          addToCollection(item)
        }}
        className='bg-blue-700 px-2 py-1 rounded font-medium text-white cursor-pointer active:scale-95'>Save</button>
      </div>
    </div>
  )
}

export default ResultCard
