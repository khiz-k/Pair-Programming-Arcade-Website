import React from 'react';
import './footer.scss';
import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
      <footer>
        <div><a href="./" className="footer-anchor">Socials</a></div>
        <div>Copyright Brainstation 2020</div>
      </footer>
    );
}