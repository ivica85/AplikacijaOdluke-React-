import React from "react";

class Option extends React.Component {
  render() {
    return (
      <div className="option">
        <p className="option__text">{this.props.count}. {this.props.optionText} </p>
        <button
          className="button button__link"
          onClick={e => {
            this.props.handleDeleteOption(this.props.optionText);
          }}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default Option;
