import React from 'react';
import './footer.css';
import '../../iconfont.css';

class PCFooter extends React.Component{

    render() {
        return(
            <div className="pc-footer-wrapper">
                <hr/>
                <div className="pc-footer-content">南浦旧铺 © 2019 Sonia Sun.
                    <a href="https://github.com/ParanoiaSun" rel="noopener noreferrer nofollow" target="_blank">
                        <span className="github-link footer-link nampo-icon">&#xf1b4;</span>
                    </a>
                    <a href="https://weibo.com/2867944382" rel="noopener noreferrer nofollow" target="_blank">
                        <span className="weibo-link footer-link nampo-icon">&#xf01af;</span>
                    </a>
                    <a href="https://twitter.com/Paranoia_Sun" rel="noopener noreferrer nofollow" target="_blank">
                        <span className="twitter-link footer-link nampo-icon">&#xe6aa;</span>
                    </a>

                </div>
            </div>
        );
    }
}

export default PCFooter;