import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

injectTapEventPlugin();

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [
      {
        representativeName: "Rajesh",
        headQuaters: "Hyderabad",
        regionName: "Hyderabad",
        pincode: "5150002",
      },
      {
        representativeName: "Ravi",
        headQuaters: "Waranagal",
        regionName: "Warangal",
        pincode: "324234324",
      },
      {
        representativeName: "Sooraj",
        headQuaters: "Secundrabad",
        regionName: "Secundrabad",
        pincode: "232424",
      },
      {
        representativeName: "Nikhil",
        headQuaters: "Vijaywada",
        regionName: "Vijaywada",
        pincode: "5444444",
      },
      
    ],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc"
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "Representative name",
                prop: "representativeName"
              },
              {
                name: "Head Quaters",
                prop: "headQuaters"
              },
              {
                name: "RegionName",
                prop: "regionName"
              },
              {
                name: "Pincode",
                prop: "pincode"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
