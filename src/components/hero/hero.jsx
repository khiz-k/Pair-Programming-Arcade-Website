import React, { Component } from 'react';
import './hero.scss';
import bmxPoster from '../../assets/Images/video-list-0.jpg';
import vidSource from '../../assets/Video/BrainStation Sample Video.mp4';

const VideoComponent = ({poster, source, changePoster, changeSource}) => {
  return (
    <>
      <video className="hero-video" poster={poster} controls onChange={changePoster}>
        <source src={source} type="video/mp4" className="video-source" onChange={changeSource}/>
      </video>
    </>
  )
}

export default class Hero extends Component {
  state = {
    poster: bmxPoster,
    source: vidSource
  };
  changePoster = event => this.setState({poster: event.target.value})
  changeSource = event => this.setState({source: event.target.value})
  render() {
    return (
      <section className="hero">
        <VideoComponent poster={this.state.poster} source={this.state.source} changePoster={() => this.changePoster} changeSource={() => this.changeSource} />
      </section>
    )
  }
}