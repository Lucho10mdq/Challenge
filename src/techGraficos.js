import React,{Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import { CARDS } from './cards.json';

class TechGraficos extends Component{
   constructor(props){
     super(props);
   }
   render(){
     var doughnutData={
       datasets:[
         {
           label:'# of Votes',
           "data":this.props.data,
           backgroundColor:[
             "#e36588",
             "#99edcc",
             "#9ac4f8"
           ]
         }
       ]
     };
     let options={responsive :true,maintainAspectRatio:false}
     return
     (
       <Doughnut data={doughnutData} options={options}/>

     )
   }
}
export default TechGraficos;
