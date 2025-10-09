import React from 'react';
import style from './Footer.module.css'
const Footer = (props) => {
  return (
    <div className={style.Footer} data-testid="Footer">
      Desorbaix / Orsys &copy; 2025
    </div>
  )
};
export default Footer;
