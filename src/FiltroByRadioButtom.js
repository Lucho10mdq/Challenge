import React, { Component } from 'react';
import './Sidebar.css';
import { CARDS } from './cards.json';
import {Link} from 'react-router-dom';

class FiltroByRadioButtom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            search: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.DatosSearch=this.DatosSearch.bind(this);
    }
    DatosSearch(event) {
      	this.setState({ search: event.target.value});
        alert("Usted ingreso="+event.target.value);
    }

    handleInputChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
              <div className="controls">
                <div className="form-group">
                  <div className="col-md-0">
                       <input id="textinput"   value = { this.props.search } onChange = {this.DatosSearch}  name="textinput" type="text" placeholder="Search in Card" className="form-control input-md"/>
                   </div>
                </div>
                <div className="form-group">
                  </div>
                    <label className="col-md- 0 control-label"  className="TituloFilter" >Filter by</label>
                    <div className="col-md-0">
                      <div className="radio">
                        <label   className="RadioButton">
                        <Link to={"/Frontend"}> <input type="radio" name="radios" value={this.state.value} onChange={this.handleInputChange} id="rdFortend" value="Frontend"/></Link>
                            Frontend
                        </label>
                      </div>
                	<div className="radio">
                      		<label  className="RadioButton">
	                      <Link to={"/Backend"}>  <input type="radio"  name="radios" id="rdBackend" value={this.state.value} onChange={this.handleInputChange} value="Backend" /></Link>
	                           Backend
                          </label>
                        </div>
                </div>
			    </div>
	   	);
    }
}
export default FiltroByRadioButtom
