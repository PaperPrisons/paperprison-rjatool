import React from "react";

const Header = () => {
  return (
    <div className="rja-tool-header">
      <div className="left">
        <a href="https://paperprisons.org">
          <img
            src="https://paperprisons.org/images/logo.png"
            alt="Paper Prisons RJA DTool"
            className="logo"
          />
        </a>
      </div>
      <div className="center">
        <p className="website-name">Racial Justice Act  Demo Tool</p>
      </div>
      <div className="right">
        <a href="https://paperprisons.org/about.html">About</a>
        <a href="https://paperprisons.org/states.html">State Reports</a>
        <a href="https://paperprisons.org/news_blog.html">News/Blog</a>
        <a href="https://paperprisons.org/diary.html">Diary</a>
        <a href="https://paperprisons.org/team.html">Team</a> 
        <a href="https://paperprisons.org/rja">RJA</a>
      </div>
    </div>
  );
};

export default Header;