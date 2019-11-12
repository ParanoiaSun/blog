import React from 'react';
import './article.css';

import PCArticle from "./PCArticle";
import {fetchGet} from "../../../util/HttpUtil";

class PCArticlePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetchGet('/blog/getByPage', null, null).then((res) => {
            if(res.code === 1){
                console.log(res);
                this.setState({
                    articles: res.data
                });
            }
        }, (fail) => {
            // TODO 处理请求fail
        });
    }

    render() {
        return(
            <div className="pc-articles-page">
                <div className="pc-articles-wrapper">
                    {this.state.articles.map((item, key) => {
                        return <PCArticle article={ item } index={key} key={ item._id }/>
                    })}
                </div>
            </div>
        );
    }
}

export default PCArticlePage;