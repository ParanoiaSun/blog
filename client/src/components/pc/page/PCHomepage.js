import React from 'react';
import PCFooter from "../footer/PCFooter";

class PCHomepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: "homepage-cover.jpg"
        }
    }

    render() {
        return(
            <div className="pc-homepage">
                {/*<div style={{ backgroundImage: "url(" + this.state.cover + ")" }} className="pc-homepage-cover">*/}
                <div className="pc-homepage-cover">

                </div>
                <div className="pc-homepage-wrapper">
                    <div className="pc-homepage-content">
                        <div className="pc-homepage-content-logo" />
                        <div className="pc-homepage-content-intro">
                            ▶&nbsp;&nbsp;&nbsp;和世界交手这许多年，你是否光彩依旧，兴致盎然。
                        </div>
                    </div>
                </div>
                <div className="footer-area">
                    <PCFooter />
                </div>
            </div>
        );
    }
}

export default PCHomepage;