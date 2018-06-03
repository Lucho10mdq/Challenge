import React, { Component } from 'react';
import avalith from './avalith.png';
import './App.css';
import './Menu.css';
import Navigation from './Navigation';
import Content from'./Content';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import { CARDS } from './cards.json';
import {Route,Switch,Link} from 'react-router-dom';
import {Pie} from 'react-chartjs-2';


class App extends Component {
  static propTypes={
    children:PropTypes.object.isRequired
  };
  constructor(props){
    super(props);
    this.state = {
      sidebarVisible: true,
        CARDS
    }
    this.logoImageClick = this.logoImageClick.bind(this);
    this.comparar = this.comparar.bind(this);
    this.Filtrar=this.Filtrar.bind(this);
  }

  logoImageClick(){
    const { sidebarVisible } = this.state;
    this.setState({
      sidebarVisible: !sidebarVisible
    });
  }

  comparar( idMatch) {
    let result;
    for(var i =0;i<CARDS.length;i++){
     var data =CARDS[i];
       if (data.cardId == idMatch ) {
        result =  <div  className="element">
                    <div className="col-md-9">
                      <div className="thumbnail">
                        <img src={data.cardImageUrl} alt="..."/>
                          <div className="caption">
                            <h3>{data.cardPost.postTitle}</h3>
                              <p>{data.cardPost.postDescription}</p>

                          </div>
                      </div>
                   </div>
                </div>
       }
    }
    return (result)
  }

  Filtrar(tecMatch){
    let result;
    console.log(tecMatch);
    Object.keys(CARDS).forEach(function(card, i) {
       if (CARDS[card].cardTechnology == tecMatch) {
            result = <div  className="element">
                        <div className="col-md-9">
                          <div className="thumbnail">
                            <img src={CARDS[card].cardImageUrl} alt="..."/>
                              <div className="caption">
                                  <p>{CARDS[card].cardPost.postDescription}</p>
                              </div>
                          </div>
                       </div>
                    </div>
        }
    });
    return(result)
  }
  render() {
    const { sidebarVisible } = this.state;

    const Filtro =({match})=>(
       <div className="element">
          <div id="content" className="Content">
            <div className="row ">
             </div>
             <div className="col-md-12">
                      {this.Filtrar(match.params.Tech)}
             </div>
          </div>
      </div>
    );
    const cartas =({match})=>(
       <div className="element">
          <div id="content" className="Content">
            <div className="row ">
             </div>
             <div className="col-md-12">
                  <Link to={"/"}><button type="button" class="btn btn-dark">Go Back</button></Link>
                        {this.comparar(match.params.id)}
             </div>
          </div>
      </div>
    );
    return (
      <div className="App">
        <Navigation logoImageClick={this.logoImageClick} />
        <div className="row">
          <div className="col-3">
            <Sidebar visibility={sidebarVisible} />
          </div>
          <div className="col-9">
          <Switch>
              <Route exact path="/" component ={Content} />
              <Route exact path="/:id" component ={cartas} />
              <Route  path="/:Tech" component={Filtro}/>
          </Switch>
        </div>
        </div>
      </div>
    );
  }
}
export default App;
