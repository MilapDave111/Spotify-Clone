import React, { useContext } from 'react'
import{ playerContext } from '../context/playerContext'


const SongItem = ({name,image,desc,id}) => {

  const {playWithId} = useContext(playerContext)

  return (
    <div onClick={() => playWithId(id)} className='min-w-[180] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] '>
        <img src={image} alt="" className="rounded" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem