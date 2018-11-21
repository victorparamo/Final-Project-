import React from 'react';
import './Mission.css';
import missionPicture from '../../images/mission2.JPG';

const Mission = () => {
    return (
        <div className="MissionContainer">
            <div className="Mission_Left">
                <p className="MissionTitle">   Mission </p>
                <div className="normal">
                <p> Our mission is to create a virtual gallery where any artist can upload his work.</p>
                <p> We would like to give the opportunity to every artist in the world to make its master 
                    pieces known and at the same time give the oportunity to the world to get amazed with art.</p>
                <p> We know that users will get that piece of art that they have been looking for that special room.</p>
                <p> At the same time we know that with time we will make art affordable to everybody.</p>
                <p> Living your life making art will be possible!</p>
                </div>
            </div>
            <div className="Mission_Right">
                <img src={missionPicture} height="100%" width="100%" />
            </div>
        </div>
    )
}

export default Mission;