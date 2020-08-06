import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    representativeName: "",
    headQuaters: "",
    regionName: "",
    pincode: ""
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  onSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        representativeName: "",
        headQuaters: "",
        regionName: "",
        pincode: "",
      });
    
  };

  render() {
    return (
      <form>
        <TextField
          name="representativeName"
          hintText="Reprensetative Name"
          floatingLabelText="Representative Name"
          value={this.state.representativeName}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="headQuaters"
          hintText="HQ"
          floatingLabelText="HQ"
          value={this.state.headQuaters}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="regionName"
          hintText="regionname"
          floatingLabelText="regionname"
          value={this.state.regionName}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="pincode"
          hintText="Pincode"
          floatingLabelText="pincode"
          value={this.state.pincode}
          onChange={e => this.change(e)}

          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
