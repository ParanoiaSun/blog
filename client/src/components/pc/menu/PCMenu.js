import React from 'react';
import './menu.css';

import {Link} from "react-router-dom";

class PCMenu extends React.Component {

    componentDidMount() {
    }

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            path: props
        }
    }

    handleMenuClick() {
        console.log(this.state.path);
        this.setState({
            path: '/homepage'
        });
    }

    render() {
        return (
          <div className="menu-wrapper">
              <div className={this.state.path === '/homepage' ? 'menu-item-active' : 'menu-item'}>
                  <Link onClick={this.handleMenuClick.bind(this)} to="/homepage" >首 页</Link>
              </div>
              <div className={this.props.match === '/articles' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/articles" >博 文</Link>
              </div>
              <div className={this.props.match === '/albums' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/albums" >相 册</Link>
              </div>
              <div className={this.props.match === '/messages' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/messages" >留 言</Link>
              </div>
              <div className={this.props.match === '/about' ? 'menu-item-active' : 'menu-item'}>
                  <Link to="/about" >关 于</Link>
              </div>
          </div>
        );
    }
}

export default PCMenu;