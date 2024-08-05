import './App.css';
import Map from "./assets/mapa_galatico.png";
import React, { useEffect, useState } from 'react';
import GameDetails from './GameDetails';
import { fetchScreenData } from './api';

function App() {
  const gameDetails = {
    servername: "Best Server",
    serverurl: "http://bestserver.com",
    mapname: "Galactic Map",
    maxplayers: 16,
    steamid: "1234567890",
    gamemode: "Survival",
    volume: "High",
    language: "English"
  };

  const [screenData, setScreenData] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [mountingAddons, setMountingAddons] = useState(false);

  useEffect(() => {
    async function getScreenData() {
      try {
        const data = await fetchScreenData(gameDetails.steamid, 'example_screen_id');
        setScreenData(data);
        simulateLoadingProgress();
      } catch (error) {
        setError(error.message);
      }
    }
    getScreenData();
  }, [gameDetails.steamid]);

  const simulateLoadingProgress = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      if (progressValue < 100) {
        progressValue += 5;
        setProgress(progressValue);
      } else {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="App">
      <div className='Content'>
        <div className='Image'>
          <img src={Map} alt="Map" className="Map"/>
        </div>
        <div className='GameDetails'>
          <GameDetails {...gameDetails} />
          {error && <div>Error: {error}</div>}
          {screenData && (
            <div>
              {/* Renderize os dados da tela aqui */}
              <pre>{JSON.stringify(screenData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-text">
        {progress < 100 ? `${progress}%` : <span>&#10003;</span>}
      </div>
    </div>
  );
}

export default App;
