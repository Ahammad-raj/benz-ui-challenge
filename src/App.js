import React, {Component} from 'react';
import Filter from './components/Filter'
import RecordTable from './components/RecordTable'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedName: true,
            checkedDob: false
        }
        this.checkBoxStatus = props.checkBoxStatus;
    }

    handleChange = (event) => {
        if (event.target.value === 'checkedName') {
            this.setState({
                    [event.target.value]: event.target.checked,
                    checkedDob: false
                }
            );
        }
        if (event.target.value === 'checkedDob') {
            this.setState({
                    [event.target.value]: event.target.checked,
                    checkedName: false
                }
            );
        }
    }


    render() {
        return (
            <div className="container-fluid">
                <center><h1>Birthday Records</h1></center>
                <Filter handleChange={this.handleChange} checkedName={this.state.checkedName}
                        checkedDob={this.state.checkedDob}></Filter>
                <RecordTable/>
            </div>
        );
    }

}

export default App;
