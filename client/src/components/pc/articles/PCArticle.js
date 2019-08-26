import React from 'react';
import './article.css';

class PCArticle extends React.Component {
    render() {
        return (
            <div className="pc-article">
                <div id="pc-article-split-line"/>
                <div className="pc-article-summary">
                    <div className="pc-article-title">什么是CSS3，CSS3能做什么？</div>
                    <div className="pc-article-time">20 Aug, 2019</div>
                </div>
                <div className="pc-article-intro">
                   CSS3是CSS2的升级版本，3只是版本号，它在CSS2.1 的基础上增加了很多强大的新功能，
                   目前主浏览器 Chorme、Safari、Firefox、Opera、甚至360都已经支持了CSS3大部分功能了，
                   IE10以后也开始全面支持CSS3了。在编写CSS3样式时，不同的浏览器可能需要不同的前缀。
                   它表示该CSS属性或规则尚未成为W3C标准的一部分。是浏览器的私有属性虽然目前较新版本的浏览器都是不需要前缀的，但为了更好的向前兼容，前缀还是少不了的。
                </div>
                <div className="pc-article-detail-button">
                    阅读全文
                </div>
            </div>
        );
    }
}

export default PCArticle;