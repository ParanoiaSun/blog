import React from 'react';
import './messages.css';

class PCMessageDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
            index: props.index
        }
    }

    render() {
        return(
            <div style={{ animationDelay: (200 * (this.state.index + 1)) + 'ms' }} className="pc-message-detail-wrapper">
                <div className="pc-message-detail-title">
                    <div className="pc-message-detail-name">
                        {this.state.message.name}
                    </div>
                    <div className="pc-message-detail-time">
                        {this.state.message.send_time}
                    </div>
                </div>
                <div className="pc-message-detail-content">
                    {this.state.message.content}
                </div>
                <div className="pc-message-detail-reply">
                    回复
                </div>
                {(this.state.message.sub_message === undefined) ? null :
                    <div className="pc-sub-message-detail-wrapper">
                        {this.state.message.sub_message.map((item, key) => {
                        return <div className="pc-sub-message-detail-content" key={ key }>
                                <div className="pc-message-detail-title">
                                    <div className="pc-message-detail-name">
                                        {item.name}
                                    </div>
                                    <div className="pc-message-detail-time">
                                        {item.send_time}
                                    </div>
                                </div>
                                <div className="pc-message-detail-content">
                                    {item.content}
                                </div>
                            </div>
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default PCMessageDetail;