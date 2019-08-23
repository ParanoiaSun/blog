import React, {Fragment} from 'react';
import PCHeader from "../header/PCHeader";
import './page.css';

import MediaQuery from "react-responsive";
import {Route} from "react-router";
import PCAlbums from "../albums/PCAlbums";
import PCMessages from "../messages/PCMessages";
import PCAbout from "../about/PCAbout";
import PCArticlePage from "../articles/PCArticlePage";
import PCFooter from "../footer/PCFooter";

class PCDetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <Fragment>
                <div className="pc-detail-page">
                    <PCHeader />
                    <MediaQuery query='(min-device-width: 1224px)'>
                        <Route path="/articles" component={PCArticlePage}/>
                        <Route path="/albums" component={PCAlbums}/>
                        <Route path="/messages" component={PCMessages}/>
                        <Route path="/about" component={PCAbout}/>
                    </MediaQuery>
                </div>
                <PCFooter />
            </Fragment>
        );
    }
}

export default PCDetailPage;