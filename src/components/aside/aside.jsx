import React, { Component } from 'react';
import './aside.scss'
// import image from '../../assets/Images/video-list-.jpg';
// import title from '';
// import creator from '';

const ImageComponent = ({image, changeImage}) => {
  return (
    <>
      <img src={image} className="item-image" alt="List Video" onChange={changeImage} />
    </>
  )
}

const TextComponent = ({title, creator, changeTitle, changeCreator}) => {
  return (
    <>
     <h5 className="item-title" onChange={changeTitle}>{title}</h5><h5 className="item-creator" onChange={changeCreator}>{creator}</h5>
    </>
  )
}

export default class Aside extends Component {
  state = {
    image: 'placeholder',
    title: 'placeholder',
    creator: 'placeholder'
  };
  changeImage = event => this.setState({image: event.target.value})
  changeTitle = event => this.setState({title: event.target.value})
  changeCreator = event => this.setState({creator: event.target.value})
  render() {
    return (
      <aside className="next-video">
        <h5 className="next-video__title">Next Video</h5>
        <ul className="next-video__list">
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>

          {/* map first list item and populate via data rather than typing code 9 times */}
          
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>
          <li className="list-item" /* onClick={(event)=>{props.clickHandler(event, props.title)}} */>
            <a href="./" className="item-anchor">
              <ImageComponent image={this.state.image} changeImage={() => this.changeImage}/>
              <div className="item-text">
                <TextComponent title={this.state.title} creator={this.state.creator} changeTitle={() => this.changeTitle} changeCreator={() => this.changeCreator} />
              </div>
            </a>
          </li>
        </ul>
      </aside>
    )
  }
}