import React from 'react';
import './article.css';

import PCArticle from "./PCArticle";

class PCArticlePage extends React.Component {
    render() {
        return(
            <div className="pc-articles-page">
                <div className="pc-articles-wrapper">
                    <PCArticle />
                    <PCArticle />
                    <PCArticle />
                </div>
            </div>
        );
    }
}

export default PCArticlePage;