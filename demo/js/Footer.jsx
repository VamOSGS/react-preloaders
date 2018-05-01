import React from 'react';
import Icon from 'react-icons-kit';
import { heart } from 'react-icons-kit/icomoon/heart';

const Footer = () => (
  <div className="code">
    <div>
      Made with <Icon icon={heart} /> by
      <a href="https://github.com/vamosgs">Gegham Samvelyan(VamOSGS)</a>
    </div>
  </div>
);

export default Footer;
