import React from 'react';
import './article.css';

import {Link} from 'react-router-dom';
import { formISODateToStr } from "../../../util/CommonUtil";

class PCArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            article: props.article,
            index: props.index
        }
    }

    render() {
        return (
            <div style={{ animationDelay: (300 * this.state.index) + 'ms' }} id={ "pc-article-" + this.state.article.id } className="pc-article">
                <div className="pc-article-split-line"/>
                <div className="pc-article-summary">
                    <div className="pc-article-title">{ this.state.article.title }</div>
                    <div className="pc-article-time">{ formISODateToStr(this.state.article.create_time) }</div>
                </div>
                <div className="pc-article-intro">
                    { this.state.article.summary }
                </div>
                <div className="pc-article-detail-button">
                    <Link to={"/articles/content/" + this.state.article._id}> 阅读全文 </Link>
                </div>
            </div>
        );
    }
}

export default PCArticle;