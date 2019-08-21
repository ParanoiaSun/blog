import React from 'react';
import './menu.css';

class PCMenu extends React.Component {

    render() {
        return (
          <div className="menu-wrapper">
              <div className="menu-item">首页</div>
              <div className="menu-item">项目</div>
              <div className="menu-item">博客</div>
              <div className="menu-item">关于</div>
          </div>
        );
    }
}

export default PCMenu;