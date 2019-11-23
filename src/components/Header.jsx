import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1 className="header__titl">Indecision App</h1>
          <h2 className="header__subtitle">
            Put your life in the hands of a computer
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
