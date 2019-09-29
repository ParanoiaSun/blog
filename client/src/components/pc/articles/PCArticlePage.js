import React from 'react';
import './article.css';

import PCArticle from "./PCArticle";

class PCArticlePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    id: 1,
                    title: "从零搭建React全家桶框架教程",
                    date: "20 Aug, 2019",
                    summary: "WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。"
                },
                {
                    id: 2,
                    title: "记使用react全家桶过程中遇到的坑",
                    date: "20 Aug, 2019",
                    summary: "Route不支持嵌套必须写在同级 意思就是如果Home层中还有路由跳转你不能写在App层中Home Route的下面而是得写在Home文件中嵌套。取消了Router的写法 改成HashRouter 和BrowserRouter。switch 只渲染出第一个与当前访问地址匹配的 Route 或 Redirect。另外，Switch对于转场动画也非常适用，因为被渲染的路由和前一个被渲染的路由处于同一个节点位置！从react-router-dom中引用。"
                },
                {
                    id: 3,
                    title: "从零搭建React全家桶框架教程",
                    date: "20 Aug, 2019",
                    summary: "WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。"
                },
                {
                    id: 4,
                    title: "记使用react全家桶过程中遇到的坑",
                    date: "20 Aug, 2019",
                    summary: "Route不支持嵌套必须写在同级 意思就是如果Home层中还有路由跳转你不能写在App层中Home Route的下面而是得写在Home文件中嵌套。取消了Router的写法 改成HashRouter 和BrowserRouter。switch 只渲染出第一个与当前访问地址匹配的 Route 或 Redirect。另外，Switch对于转场动画也非常适用，因为被渲染的路由和前一个被渲染的路由处于同一个节点位置！从react-router-dom中引用。"
                },
                {
                    id: 5,
                    title: "从零搭建React全家桶框架教程",
                    date: "20 Aug, 2019",
                    summary: "WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。"
                }
            ]
        }
    }

    render() {
        return(
            <div className="pc-articles-page">
                <div className="pc-articles-wrapper">
                    {this.state.articles.map((item, key) => {
                        return <PCArticle article={ item } index={key} key={ key }/>
                    })}
                </div>
            </div>
        );
    }
}

export default PCArticlePage;