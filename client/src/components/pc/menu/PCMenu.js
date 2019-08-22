import React from 'react';
import './menu.css';

import {Link} from "react-router-dom";

class PCMenu extends React.Component {

    render() {
        return (
          <div className="menu-wrapper">
              <div className="menu-item">
                  <Link to="/articles" >首 页</Link>
              </div>
              <div className="menu-item">
                  <Link to="/albums" >相 册</Link>
              </div>
              <div className="menu-item">
                  <Link to="/messages" >留 言</Link>
              </div>
              <div className="menu-item">
                  <Link to="/about" >关 于</Link>
              </div>
          </div>
        );
    }
}

export default PCMenu;