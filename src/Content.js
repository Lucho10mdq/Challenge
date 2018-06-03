import React, { Component } from 'react';
import './Content.css';
import './index.css';
import {Link} from 'react-router-dom';
import {CARDS} from './cards.json';

class Content extends Component {
		constructor()
    {
      super();
      this.state={
				CARDS
      }
			this.FiltroSearch=this.FiltroSearch.bind(this);
    }
		FiltroSearch(event) {
		}

  render() {
		
    const cardes= this.state.CARDS.map((cards,i) => {
        return(
        	<div  className="element">
				       <div className="col-md-4">
				         <div className="thumbnail">
				          <img src={cards.cardImageUrl} alt="..."/>
				         <div className="caption">
				           <h3> <Link to={"/"+cards.cardId}>{cards.cardTitle}</Link></h3>
				            <p>{cards.cardDescription}</p>
				         </div>
				  </div>
				</div>
			</div>
          );
      })
    return (
      <div id="content" className="Content">
        <div className="row mt-12">
	        	<h2>Lenguages & Tecnologies</h2>
  	        <div className="col-md-12">
  	      	  {cardes}
  	      	</div>
      	 </div>
      </div>
    );
  }
}
export default Content;
