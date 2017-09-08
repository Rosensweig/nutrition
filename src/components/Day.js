import React, { Component } from 'react';

class Day extends Component {
  render() {
    return (
      <div className="Day">
      	<h2><a id="previous">&lt;</a> Meals for {this.props.current} <a id="next">&gt;</a></h2>
      </div>
    );
  }
}

export default Day;