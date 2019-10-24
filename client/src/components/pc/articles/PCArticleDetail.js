import React from 'react';
import './article.css';
import '../../iconfont.css';
import './articleStyle.css';
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import { fetchFile } from "../../../util/HttpUtil";
import CodeBlock from "../../CodeBlock";

class PCArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: props.match.params.id,
            fileContent: '文章内容加载中...'
        }
    }

    componentDidMount() {
        fetchFile('/public/blogs/' + this.state.filePath + '.md', null, 'text/x-markdown')
            .then( res => res.text() )
            .then(data => {
            this.setState({
                fileContent: data
            });
        }, (fail) => {
            // TODO 处理请求fail
        });
    }

    render() {
        return (
            <div className="pc-article-detail">
                <Link to="/articles/list">
                    <span className="icon-link">&#58926;</span>
                    <span>返回文章列表</span>
                </Link>
                <div className="pc-article-detail-content">
                    <ReactMarkdown source={this.state.fileContent} escapeHtml={false}
                                   renderers={{
                                       code: CodeBlock
                                   }} />
                </div>
            </div>
        );
    }
}

export default PCArticleDetail;