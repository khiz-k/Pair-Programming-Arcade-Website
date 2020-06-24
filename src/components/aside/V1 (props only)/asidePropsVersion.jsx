import React from 'react';
import './asideDraft.scss';
import singleVid from './singleVid';

const VideoList = (props) => {
  // create an array to store info for the videos(s) here
  const clickHandler = (_event, title) => console.log(title);
  const videoArray = [
    {
      content: 'First Video content',
      pic: '../../assets/Images/video-list-1.jpg',
      title: 'Become A Travel Pro In One Easy Lesson',
      creator: 'Scotty Cranmer'
    },
    {
      content: 'Second Video content',
      pic: '../../assets/Images/video-list-2.jpg',
      title: 'Les Houches The Hidden Gem Of The Chamonix',
      creator: 'Scotty Cranmer'
    },
    {
      content: 'Third Video content',
      pic: '../../assets/Images/video-list-3.jpg',
      title: 'Travel Health Useful Medical Information For',
      creator: 'Scotty Cranmer'
    },
    {
      content: 'Fourth Video content',
      pic: '../../assets/Images/video-list-4.jpg',
      title: 'Cheap Airline Tickets Great Ways To Save',
      creator: 'Emily Harper'
    },
    {
      content: 'Fifth Video content',
      pic: '../../assets/Images/video-list-5.jpg',
      title: 'Take A Romantic Break In A Boutique Hotel',
      creator: 'Ethan Owen'
    },
    {
      content: 'Sixth Video content',
      pic: '../../assets/Images/video-list-6.jpg',
      title: 'Choose The Perfect Accomadations',
      creator: 'Lydia Perez'
    },
    {
      content: 'Seventh Video content',
      pic: '../../assets/Images/video-list-7.jpg',
      title: 'Cruising Destination Ideas',
      creator: 'Timothy Austin'
    },
    {
      content: 'Eigth Video content',
      pic: '../../assets/Images/video-list-8.jpg',
      title: 'Train Travel On Track For Safety',
      creator: 'Scotty Cranmer'
    }
  ];
  return (
    <aside className="videos">
      <h5 className="videos__title">Next Video</h5>
      <ul className="videos__list">
      {videoArray.map((video, i) => {
        return (
        <singleVid 
          content={video.content} 
          pic={video.pic}
          title={video.title} 
          creator={video.creator}
          key={i} 
          clickHandler={clickHandler}
          />)
      })
      }
      </ul>
    </aside>
  );
}

export default VideoList;

