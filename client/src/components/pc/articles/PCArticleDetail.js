import React from 'react';
import './article.css';
import '../../iconfont.css';
import './articleStyle.css';

import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";

class PCArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: '文章内容加载中...'
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/mock/example.md')
            .then((response) => response.text())
            .then(
                (data) => {
                    this.setState({
                        filePath: data
                    })
                }
            );
    }

    render() {
        return (
            <div className="pc-article-detail">
                <Link to="/articles/list">
                    <span className="icon-link">&#58926;</span>
                    <span>返回文章列表</span>
                </Link>
                <div className="pc-article-detail-content">
                    <ReactMarkdown source={this.state.filePath} />
                </div>
            </div>
        );
    }
}

export default PCArticleDetail;