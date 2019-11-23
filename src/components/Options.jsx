import React from "react";
import Option from "./Option";

class Options extends React.Component {
  render() {
    return (
      <div>
        <div className="widget-header">
          <h3 className='widget-header__title'>Yor Options</h3>
          <button
            className="button button__link"
            onClick={this.props.handleDeleteOptions}
          >
            Remove All{" "}
          </button>
        </div>

        {this.props.options.length === 0 && (
          <p  className='widge__message' >Please add an option to get started!</p>
        )}
        {this.props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count = {index + 1}
            handleDeleteOption={this.props.handleDeleteOption}
          />
        ))}
      </div>
    );
  }
}

export default Options;
