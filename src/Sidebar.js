import React, { Component } from 'react';
import './Sidebar.css';
import FiltroByRadioButtom from './FiltroByRadioButtom';




const filterByText = event => {
  alert("filtro por texto");
}

const Sidebar = (props) => (

  <div id="sidebar">
     <div className="row">
        <nav className={`col-md-12 navbar navbar-inverse navbar-fixed-left ${!props.visibility && "hidden" }`}>
           <div className="sidenav">
              <div className="devname">
                <div className="DEV-NAME"><p>Luis Hoyos</p></div>
                <div className="DNI-XXXXXXXX">
                  <p>DNI 34.851.712</p>
                  <p>28 YEARS OLD</p>
                </div>
              </div>
              <FiltroByRadioButtom filterByText={this.filterByText} />
           </div>
        </nav>
    </div>
  </div>
);
export default Sidebar;
