import React from 'react';
import '../app.css';

import PCMenu from "../../components/pc/menu/PCMenu";
import {Route, Switch} from "react-router";
import MediaQuery from 'react-responsive';
import MobileArticles from "../../components/mobile/articles/MobileArticles";
import MobileAlbums from "../../components/mobile/albums/MobileAlbums";
import MobileMessages from "../../components/mobile/messages/MobileMessages";
import MobileAbout from "../../components/mobile/about/MobileAbout";
import PCHomepage from "../../components/pc/page/PCHomepage";
import PCDetailPage from "../../components/pc/page/PCDetailPage";

class PCApp extends React.Component {
    render() {
        return (
            <div className="pc-content-wrapper">
                <PCMenu />
                <div className="pc-content">
                    <MediaQuery query='(min-device-width: 1224px)'>
                        <Switch>
                            <Route path="/homepage" component={PCHomepage}/>
                            <Route path="/*" component={PCDetailPage}/>
                        </Switch>
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