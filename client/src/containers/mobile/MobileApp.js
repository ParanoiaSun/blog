import React from 'react';
import MediaQuery from "react-responsive";
import {Route} from "react-router";
import PCArticles from "../../components/pc/articles/PCArticlePage";
import PCAlbums from "../../components/pc/albums/PCAlbums";
import PCMessages from "../../components/pc/messages/PCMessages";
import PCAbout from "../../components/pc/about/PCAbout";
import MobileArticles from "../../components/mobile/articles/MobileArticles";
import MobileAlbums from "../../components/mobile/albums/MobileAlbums";
import MobileMessages from "../../components/mobile/messages/MobileMessages";
import MobileAbout from "../../components/mobile/about/MobileAbout";

class MobileApp extends React.Component {
    render() {
        return (
          <div>
              <p>sorry ~ 移动端界面还在开发中哦</p>
              <p>请移步PC端浏览器 ^_^</p>
              <p>开发日志：</p>
              <MediaQuery query='(min-device-width: 1224px)'>
                  <Route path="/articles" component={PCArticles}/>
                  <Route path="/albums" component={PCAlbums}/>
                  <Route path="/messages" component={PCMessages}/>
                  <Route path="/about" component={PCAbout}/>
              </MediaQuery>
              <MediaQuery query='(max-device-width: 1224px)'>
                  <Route path="/articles" component={MobileArticles}/>
                  <Route path="/albums" component={MobileAlbums}/>
                  <Route path="/messages" component={MobileMessages}/>
                  <Route path="/about" component={MobileAbout}/>
              </MediaQuery>
          </div>
        );
    }
}

export default MobileApp;