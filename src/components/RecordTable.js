import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

class RecordTable extends React.Component {
  componentDidMount = () => {
    this.props.getTableData(this.people);
  };

  constructor(props) {
    super(props);
    this.people = [
      {
        name: "Veronica Mize",
        dob: "11/29/2011"
      },
      {
        name: "Cecilia Olsson",
        dob: "11/29/1992"
      },
      {
        name: "Peter Parker",
        dob: "01/16/1992"
      },
      {
        name: "Jimmy Shergil",
        dob: "12/12/2001"
      },
      {
        name: "Alexander Alfred",
        dob: "02/09/1891"
      },
      {
        name: "Janice Shroyer",
        dob: "12/01/1982"
      },
      {
        name: "Ralph White",
        dob: "11/30/2011"
      }
    ];
  }

  render() {
    return (
      <div>
        <Paper className="width">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-header">Name</TableCell>
                <TableCell className="table-header">Date of Birth</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.sortedData.map((person, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="table-header">
                      {person.name}
                    </TableCell>
                    <TableCell className="table-header">{person.dob}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default RecordTable;
