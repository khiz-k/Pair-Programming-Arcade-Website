import React from 'react';
import './aside.scss';
import { Link } from "react-router-dom";

export default function Aside (props) {
  const filteredGamesList = props.videos.filter(video => video.id !== props.currentlyDisplayedVideo.id);
  return (
    <aside className="other-games">
      <h4 className="other-games__title">Other Games</h4>
      <ul className="other-games__list">
        {filteredGamesList.map((video) => {
        return (
        <li key={video.id} className="other-games__list-item">
          <Link to={"/video/"+video.id} className="other-games__item-anchor">
          <div className="other-games__item-text">
              <h5 className="other-games__item-title">{video.title}</h5>
            </div>
            <img src={video.image} className="other-games__item-image" alt={`Video ${video.id}`}/>
          </Link>
        </li>      
        );
        })}   
      </ul>
    </aside>
  );
}