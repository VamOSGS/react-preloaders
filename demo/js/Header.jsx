import React from 'react';
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';
import { npm } from 'react-icons-kit/icomoon/npm';

const Header = () => (
  <div className="code">
    <div>
      Find this package in
      <a href="https://www.npmjs.com/package/react-preloaders">
        <Icon icon={npm} />PM
      </a>
      and read more in
      <a href="https://github.com/vamosgs/react-preloaders">
        <Icon icon={github} />Github
      </a>
    </div>
  </div>
);

export default Header;
