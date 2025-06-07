import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image, name,id,desc}) => {
const Navigate = useNavigate();

  return (
    <div onClick={()=>Navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounder cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="" className="rounded" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem