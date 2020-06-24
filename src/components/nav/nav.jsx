import React from 'react';
import './nav.scss';
import siteLogo from '../../assets/Logo/Logo-brainflix.svg';
import userImage from '../../assets/Images/Mohan-muruge.jpg';

const LogoComponent = ({logo, changeLogo}) => {
  return (
    <>
      <img src={logo} alt="BrainFlix Logo" className="nav-bar__logo-image" onChange={changeLogo} />
    </>
  )
}

const UserImageComponent = ({image, changeImage}) => {
  return (
    <>
      <img src={image} alt="User" className="user-image" onChange={changeImage} />
    </>
  )
}

export default class Nav extends React.Component {
  state = {
    logo: siteLogo,
    image: userImage
  };
  changeImage = event => this.setState({image: event.target.value})
  render() {
    return (
      <section class="nav-bar">
        <div className="nav-bar__logo">
          <a href="../../../public/index.html" className="nav-bar__anchor">
            <LogoComponent logo={this.state.logo} changeLogo={() => this.changeLogo} />
          </a>
        </div>
        <nav class="nav-bar__main">
        <ul className="nav-bar__list">
          <li className="nav-bar__list-item">
            <form className="nav-bar__form">
              <input type="text" name="search" placeholder="Search" className="nav-bar__search" />
            </form>
          </li>
          <li className="nav-bar__list-item user-upload">
            <button typeof="submit" name="uploadVideo" className="upload-button" id="upload-button" value="upload">Upload</button>
            <UserImageComponent image={this.state.image} changeImage={() => this.changeImage} />
          </li>
        </ul>
        </nav>
      </section>
    )
  }
}
