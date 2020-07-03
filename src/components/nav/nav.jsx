import React from 'react';
import './nav.scss';
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <header>
      <section className="nav-bar">
        <div className="nav-bar__logo">
          <Link to="/" className="nav-bar__anchor">
            <img src={props.logo} alt="Logo" className="nav-bar__logo-image" />
          </Link>
        </div>
        <nav className="nav-bar__main">
        <ul className="nav-bar__list">
          <li className="nav-bar__list-item user-login">
          <Link to="/login" className="login-button__link"><button name="login" className="login-button" id="login-button" value="login">Login</button></Link>
            <img src={props.image} alt="User" className="user-image" />
          </li>
        </ul>
        </nav>
      </section>
    </header>
  );
}
