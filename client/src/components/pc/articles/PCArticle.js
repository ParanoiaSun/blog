import React from 'react';
import './article.css';

class PCArticle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            article: props.article
        }
    }

    render() {
        return (
            <div id={ "pc-article-" + this.state.article.id } className="pc-article">
                <div id="pc-article-split-line"/>
                <div className="pc-article-summary">
                    <div className="pc-article-title">{ this.state.article.title }</div>
                    <div className="pc-article-time">{ this.state.article.date }</div>
                </div>
                <div className="pc-article-intro">
                    { this.state.article.summary }
                </div>
                <div className="pc-article-detail-button">
                    阅读全文
                </div>
            </div>
        );
    }
}

export default PCArticle;