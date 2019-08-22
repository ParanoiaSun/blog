import React from 'react';
import '../app.css';

import PCMenu from "../../components/pc/menu/PCMenu";
import {Route} from "react-router";
import MediaQuery from 'react-responsive';
import PCArticles from "../../components/pc/articles/PCArticles";
import PCAlbums from "../../components/pc/albums/PCAlbums";
import PCMessages from "../../components/pc/messages/PCMessages";
import PCAbout from "../../components/pc/about/PCAbout";
import MobileArticles from "../../components/mobile/articles/MobileArticles";
import MobileAlbums from "../../components/mobile/albums/MobileAlbums";
import MobileMessages from "../../components/mobile/messages/MobileMessages";
import MobileAbout from "../../components/mobile/about/MobileAbout";

class PCApp extends React.Component {
    render() {
        return (
            <div className="pc-content-wrapper">
                hello, pc
                <PCMenu />
                <div className="pc-content">
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
            </div>
        );
    }
}

export default PCApp;