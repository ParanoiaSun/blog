import React, {Fragment} from 'react';
import PCHeader from "../header/PCHeader";
import './page.css';

import MediaQuery from "react-responsive";
import {Route, Switch} from "react-router-dom";
import PCAlbums from "../albums/PCAlbums";
import PCMessages from "../messages/PCMessages";
import PCAbout from "../about/PCAbout";
import PCArticlePage from "../articles/PCArticlePage";
import PCArticleDetail from "../articles/PCArticleDetail";
import PCFooter from "../footer/PCFooter";
import PCAlbumContent from "../albums/PCAlbumContent";

class PCDetailPage extends React.Component {

    render() {
        return(
            <Fragment>
                <div className="pc-detail-page">
                    <PCHeader />
                    <MediaQuery query='(min-device-width: 1224px)'>
                        <Switch>
                            <Route path="/articles/list" component={PCArticlePage}/>
                            <Route path="/articles/content/:id" component={PCArticleDetail}/>
                            <Route path="/albums/list" component={PCAlbums}/>
                            <Route path="/albums/content/:id" component={PCAlbumContent}/>
                            <Route path="/messages" component={PCMessages}/>
                            <Route path="/about" component={PCAbout}/>
                        </Switch>
                    </MediaQuery>
                </div>
                <PCFooter />
            </Fragment>
        );
    }
}

export default PCDetailPage;