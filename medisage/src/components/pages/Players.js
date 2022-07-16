import React, {useState}from "react";
import "./Players.css";
import Card from '../layout/Card';
import Extraplayers from './Extraplayers';
import teamPlayer from '../../Db/Playerinfo'
import { useParams } from "react-router";
import './Players.css';


const Players = (props) => {

  const {team} = useParams()

  
  
  const currTeam = teamPlayer[team]
  return (
    <div className="players-page">
  
  
      <ul className="player-container">
        {currTeam.player.map((data,index) => {
          if (index < 11) {
            return (
              <Card
                key={data.id}
                background={currTeam.teamColor}
                image={data.profile}
                name={data.playerName}
                role={data.role}
                matches={data.matches}
                runs={data.run}
                wickets={data.wickets}
              />
            );
          }
        })}
      </ul>
      <ul className="extra-player-container">
        <h3 style={{ textAlign: "center" }}>Extra Players</h3>
        {currTeam.player.map((data, index) => {
          if ( index  > 10) {
            return (
              <Extraplayers
                key={data.id}
                background={currTeam.teamColor}
                image={data.profile}
                name={data.playerName}
                role={data.role}
                matches={data.matches}
                runs={data.run}
                wickets={data.wickets}
              />
            );
          }
        })}
      </ul>
     


    </div>
  );
};

export default Players;