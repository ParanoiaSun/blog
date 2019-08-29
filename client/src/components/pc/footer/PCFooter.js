import React from 'react';
import './footer.css';
import '../../iconfont.css';

class PCFooter extends React.Component{

    render() {
        return(
            <div className="pc-footer-wrapper">
                <hr/>
                <div className="pc-footer-content">南浦旧铺 © 2019 Sonia Sun.
                    <span className="github-link footer-link">&#xf1b4;</span>
                    <span className="weibo-link footer-link">&#xf01af;</span>
                    <span className="twitter-link footer-link">&#xe6aa;</span>
                </div>
            </div>
        );
    }
}

export default PCFooter;