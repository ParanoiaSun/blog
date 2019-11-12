import React from 'react';

import './about.css';

class PCAbout extends React.Component {
    render() {
        return(
            <div className="pc-about-wrapper">
                <div className="self-img">

                </div>
                <div className="self-intro-wrapper">
                    <div className="self-intro" >
                        <div className="self-intro-name">
                            Sonia Sun
                        </div>
                        <div className="self-intro-des">
                            <p>就随便介绍介绍自己吧。</p>
                            <p>我本身无法很精准地总结我自己的性格，硬要说的话，那大概是典型的INTJ女，其实我第一次接触MBTI的时候被吓到了，居然还能有这么了解我的人格分析。</p>
                            <p>喜爱绘画、摄影、看电影，当然我喜欢打游戏和追星，哈哈哈。</p>
                            <p>喜欢自己去设计实现东西带来的成就感，有一句我以前看到的话我很喜欢，创造事物的快乐大概是上帝创造世界时的一种折射，一种呈现在每片独特的、崭新的树叶和雪花上的喜悦。</p>
                            <p>我总是想的很多，但真正表达出来的东西很少，我会克制自己去评价别的人或事的欲望，我很喜欢活在自己的世界里面。</p>
                            <p>希望自己能成为一个热爱生活的人，就像我写在首页的那句话，希望能在未来很久以后，我依然光彩依旧，兴致盎然。</p>
                            <p>为什么博客要叫南浦旧铺呢？大概是我以前高考的时候苦中作乐古诗记下来的一句很喜欢的诗："西山白雪三城戍，南浦清江万里桥"，南浦是古诗词中代表离别的意象，
                                旧铺的视角又能把我当作一个旁观者，大概就是孟婆所谓"前尘世俗多纷扰，忘川尽头无归乡"的那种感觉吧。</p>
                        </div>
                        <div className="self-intro-comment">
                            <hr/>
                            * 博客封面摄于2017年乌镇，左图摄于我的毕业旅行，位于广州沙面
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PCAbout;