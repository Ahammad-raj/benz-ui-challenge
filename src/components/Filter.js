import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";

class Filter extends Component {
  render() {
    return (
      <div className="checkboxes">
        <Checkbox
          checked={this.props.checkedName}
          value="checkedName"
          onChange={this.props.handleChange}
        />
        <label>Name</label>

        <Checkbox
          checked={this.props.checkedDob}
          value="checkedDob"
          onChange={this.props.handleChange}
        />
        <label>Age</label>
      </div>
    );
  }
}

export default Filter;
