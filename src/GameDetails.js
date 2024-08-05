
import './App.css';
import React from 'react';

function GameDetails({ servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language }) {
  return (
    <div className="game-details">
      <h1 className="ServerName">{servername}</h1>
      <p className="ServerInfo">Server URL: <a href={serverurl}>{serverurl}</a></p>
      <p className="ServerInfo">Map: {mapname}</p>
      <p className="ServerInfo">Max Players: {maxplayers}</p>
      <p className="ServerInfo">Steam ID: {steamid}</p>
      <p className="ServerInfo">Game Mode: {gamemode}</p>
      <p className="ServerInfo">Volume: {volume}</p>
      <p className="ServerInfo">Language: {language}</p>
    </div>
  );
}

export default GameDetails;
