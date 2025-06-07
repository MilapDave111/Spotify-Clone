import React, { useContext } from 'react';
import Sidebar from './component/sidebar';
import Player from './component/Player';
import Display from './component/display';
import { playerContext } from './context/playerContext';

const App = () => {
  const { audioRef,track } = useContext(playerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
};

export default App;
