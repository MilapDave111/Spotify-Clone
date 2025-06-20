  import React, { useContext } from 'react'
  import Navbar from './Navbar'
  import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { playerContext } from '../context/playerContext';

  const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(playerContext);
    return (
      <>
          <Navbar/>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end ">
            <img src={albumData.image} alt="" className="w-48 rounded" />
            <div className="flex flex-col">
              <p>Playlist</p>
              <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
              <h4>{albumData.desc}</h4>
              <p className='mt-1'>
                <img src={assets.spotify_logo} alt="" className="inline-block w-5" />
                <b> Spotify </b>
                • 1,325,566 likes
                • <b>50 Songs, </b>
                 about 2 hr 30 min
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 mt-4 mb-4 pl-2 text-[#a7a7a7]">
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img src={assets.clock_icon} alt="" className="m-auto w-4" />
          </div>
          <hr />
          {
            songsData.map((items,index)=>(
              <div onClick={()=> playWithId(items.id)} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 item-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                <p className="text-white">
                  <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                  <img src={items.image} alt="" className="inline w-10 mr-5" />
                  {items.name}
                </p>
                <p className='text-15px'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'> days ago</p>
                <p className='text-[15px] text-center'>{items.duration}</p>

              </div>

            ))
          }
      </>
    )
  }

  export default DisplayAlbum