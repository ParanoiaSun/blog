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
                  <Link to="/homepage" >
                      <div className="menu-item-img menu-item-img-homepage" />
                  </Link>
              </div>
              <div className={this.state.pathname !== undefined && this.state.pathname.startsWith('/articles') ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/articles" >
                      <div className="menu-item-img menu-item-img-articles" />
                  </Link>
              </div>
              <div className={this.state.pathname !== undefined && this.state.pathname.startsWith('/albums') ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/albums" >
                      <div className="menu-item-img menu-item-img-albums" />
                  </Link>
              </div>
              <div className={this.state.pathname === '/messages' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/messages" >
                      <div className="menu-item-img menu-item-img-messages" />
                  </Link>
              </div>
              <div className={this.state.pathname === '/about' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/about" >
                      <div className="menu-item-img menu-item-img-about" />
                  </Link>
              </div>
          </div>
        );
    }
}

export default PCMenu;