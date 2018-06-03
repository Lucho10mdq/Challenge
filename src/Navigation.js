import React,{Component} from 'react';
import avalith from './avalith.png';
import './App.css';
import {Link} from 'react-router-dom';


class Navigation extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(

			<div className="row">
				<nav className="col-md-12 navbar navbar-dark bg-dark">
					<div className="nav">
	         	 		<img onClick={this.props.logoImageClick} src={avalith} className="App-avalith" alt="avalith" />
	        	 	    {this.props.titulo}
	        	 	</div>
      			</nav>
      		</div>
			)
	}
}

export default Navigation;
