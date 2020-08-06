import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import {RepMappingList} from './repdata';


const styles = {
  customWidth: {
    width: 300,
  },
};



export default class Form extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {index: 0};

  }

  handleChange = (event, index,value) =>{
    console.log("Index");
     this.setState({index});}

  
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

  renderDropdownValues=()=>{
    return (<div>
      {RepMappingList.map((repObj, index) => {
        console.log(repObj.representativeName);
        console.log(index);
      return (<MenuItem key={index} value={index} primaryText={repObj.representativeName} />)
  })}</div>);
  }

  render() {
    let {index}=this.state;
    return (
      <form>
        <DropDownMenu
          value={RepMappingList[index].representativeName}
        
          onChange={this.handleChange}
        //  onSelect={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          {/* <MenuItem value={0} primaryText="Select Rep" />
          <MenuItem value={1} primaryText="RaJesh" />
          <MenuItem value={2} primaryText="Sooraj" />
          <MenuItem value={3} primaryText="Mukund" />
          <MenuItem value={4} primaryText="Sooraj" />
          <MenuItem value={5} primaryText="Nikhil" /> */}
          {this.renderDropdownValues()}
        </DropDownMenu>
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
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={0} primaryText="Select Rep Pincode" />
          <MenuItem value={1} primaryText="2343243" />
          <MenuItem value={2} primaryText="23423423" />
          <MenuItem value={3} primaryText="23432" />
          <MenuItem value={4} primaryText="2342342" />
          <MenuItem value={5} primaryText="234234" />
        </DropDownMenu>
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
