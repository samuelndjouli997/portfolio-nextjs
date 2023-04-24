import React from 'react';

// import icons
import {
  ImLinkedin,
  ImGithub,
} from 'react-icons/im'

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4 text-2xl">
        <li>
          <a href="https://github.com/samuelndjouli997" target="_blank"><ImGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/samuel-ndjouli-amougou/" target="_blank"><ImLinkedin /></a>
        </li>
      </ul>
    </div>)
};

export default Socials;
