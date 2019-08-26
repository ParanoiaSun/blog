import React from 'react';
import './menu.css';

import {Link} from "react-router-dom";

class PCMenu extends React.Component {

    componentDidMount(){
        this.props.onMenuRef(this)
    }

    constructor(props) {
        super(props);
        this.state = {
            pathname: this.props.pathname
        }
    }

    handleRouteChange (path) {
        this.setState({
            pathname: path
        });
    }

    render() {
        return (
          <div className="menu-wrapper">
              <div className={this.state.pathname === '/homepage' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/homepage" >首 页</Link>
              </div>
              <div className={this.state.pathname === '/articles' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/articles" >博 文</Link>
              </div>
              <div className={this.state.pathname === '/albums' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/albums" >相 册</Link>
              </div>
              <div className={this.state.pathname === '/messages' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/messages" >留 言</Link>
              </div>
              <div className={this.state.pathname === '/about' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/about" >关 于</Link>
              </div>
          </div>
        );
    }
}

export default PCMenu;