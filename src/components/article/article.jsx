import React, { Component } from 'react';
import './article.scss';
// import title from '';
// import name from '';
// import timestamp from '';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
// import views from '';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';
// import likes from '';
// import text from '';

const TitleComponent = ({title, changeTitle}) => {
  return (
    <>
      <h3 className="description__title" onChange={changeTitle}>{title}</h3>
    </>
  )
}

const SubTitleComponent = ({name, changeName, timestamp, changeTimestamp}) => {
  return (
    <>
      <h5 className="description__name" onChange={changeName}>{name}</h5><h5 className="description__timestamp" onChange={changeTimestamp}>{timestamp}</h5>
    </>
  )
}

const StatsComponent = ({viewsIcon, views, changeViews, likesIcon, likes, changeLikes}) => {
  return (
    <>
      <img src={viewsIcon} alt="Views Icon" class="views-icon" /><h5 className="views" onChange={changeViews}>{views}</h5><img src={likesIcon} alt="Likes Icon" class="likes-icon" /><h5 className="likes" onChange={changeLikes}>{likes}</h5> 
    </>
  )
}

const ParagraphComponent = ({text, changeText}) => {
  return (
    <>
      <p className="description__paragraph" onChange={changeText}>{text}</p>
    </>
  )
}

export default class Article extends Component {
  state = {
    title: 'placeholder',
    name: 'placeholder',
    timestamp: 'placeholder',
    viewsIcon: viewsIcon,
    views: 'placeholder',
    likesIcon: likesIcon,
    likes: 'placeholder',
    text: 'placeholder'
  };
  changeTitle = event => this.setState({title: event.target.value})
  changeName = event => this.setState({name: event.target.value})
  changeTimestamp = event => this.setState({timestamp: event.target.value})
  changeViews = event => this.setState({views: event.target.value})
  changeLikes = event => this.setState({likes: event.target.value})
  changeText = event => this.setState({text: event.target.value})
  render() {
    return (
      <article className="description">
        <TitleComponent title={this.state.title} changeTitle={() => this.changeTitle} />
        <div className="description__top">
          <div className="description__sub-title">
          <SubTitleComponent name={this.state.name} timestamp={this.state.timestamp} changeName={() => this.changeName} changeTimestamp={() => this.changeTimestamp} />
          </div>
          <div className="description__stats">
          <StatsComponent viewsIcon={this.state.viewsIcon} views={this.state.views} likesIcon={this.state.likesIcon} likes={this.state.likes} changeViews={() => this.changeViews} changeLikes={() => this.changeLikes} />
          </div>
        </div>    
        <ParagraphComponent text={this.state.text} changeText={() => this.changeText} />
      </article>
    )
  }
}