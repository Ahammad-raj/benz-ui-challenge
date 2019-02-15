import React, { Component } from "react";
import Filter from "./components/Filter";
import RecordTable from "./components/RecordTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedName: true,
      checkedDob: false,
      sortedData: []
    };
    this.checkBoxStatus = props.checkBoxStatus;
  }

  handleChange = event => {
    if (event.target.value === "checkedName") {
      this.setState({
        [event.target.value]: event.target.checked,
        checkedDob: false,
        sortedData: this.state.sortedData.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      });
    }
    if (event.target.value === "checkedDob") {
      this.setState({
        [event.target.value]: event.target.checked,
        checkedName: false,
        sortedData: this.state.sortedData.sort(
          (a, b) => new Date(a.dob) - new Date(b.dob)
        )
      });
    }
  };

  getTableData = data => {
    this.setState({
      ...this.state,
      sortedData: data
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Filter
          handleChange={this.handleChange}
          checkedName={this.state.checkedName}
          checkedDob={this.state.checkedDob}
        />
        <RecordTable
          getTableData={this.getTableData}
          sortedData={this.state.sortedData}
        />
      </div>
    );
  }
}

export default App;
