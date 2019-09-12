import React from 'react';
import './article.css';
import '../../iconfont.css';

import { Link } from "react-router-dom";

class PCArticleDetail extends React.Component {

    render() {
        return (
            <div className="pc-article-detail">
                <Link to="/articles/list">
                    <span className="icon-link">&#58926;</span>
                    <span>返回文章列表</span>
                </Link>
                <div className="pc-article-detail-content">

                </div>
            </div>
        );
    }
}

export default PCArticleDetail;