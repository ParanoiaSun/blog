import React from 'react';
import './messages.css';
import { isStringEmpty, formISODate } from '../../../util/CommonUtil';
import { fetchPost } from "../../../util/HttpUtil";
import swal from '@sweetalert/with-react';

class PCMessageDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.message,
            subMessage: (props.message.sub_message + '' === 'undefined') ? [] : props.message.sub_message,
            index: props.index,
            sendSubInputName: '',
            sendSubInputContent: '',
            sendInputDisplay: false
        }
    }

    handleSendReply() {
        if(isStringEmpty(this.state.sendSubInputName) || isStringEmpty(this.state.sendSubInputContent)) {
            console.log('请完善回复信息^_^');
        } else {
            let params = new Map();
            params.set('message_id', this.state.message._id);
            let bodyParams = new Map();
            bodyParams.set('name', this.state.sendSubInputName);
            bodyParams.set('content', this.state.sendSubInputContent);
            fetchPost('/message/addSubMessage', params, bodyParams, null).then((res) => {
                if(res.code === 1){

                    //等待时间，显示成功
                    swal("发送成功!", {
                        buttons: false,
                        timer: 800,
                    });

                    this.setState({
                        // subMessage: [ ...this.state.subMessage, res.data],
                        subMessage: res.data.sub_message,
                        sendInputDisplay: false,
                        sendSubInputName: '',
                        sendSubInputContent: ''
                    }, () => {
                        console.log(this.state.subMessage);
                    });
                }
            }, (fail) => {
                // TODO 处理请求fail
            });
        }
    }

    handleReply() {
        this.setState({
            sendInputDisplay: !this.state.sendInputDisplay
        });
    }

    handleSendSubNameChange(e) {
        this.setState({
            sendSubInputName: e.target.value
        })
    }

    handleSendSubContentChange(e) {
        this.setState({
            sendSubInputContent: e.target.value
        })
    }

    render() {
        return(
            <div style={{ animationDelay: (200 * (this.state.index + 1)) + 'ms' }} className="pc-message-detail-wrapper">
                <div className="pc-message-detail-title">
                    <div className="pc-message-detail-name">
                        <span className="nampo-icon message-icon">&#xe6b3;</span> {this.state.message.name}
                    </div>
                    <div className="pc-message-detail-time">
                        {formISODate(this.state.message.send_time)}
                    </div>
                </div>
                <div className="pc-message-detail-content">
                    {this.state.message.content}
                </div>
                {
                    this.state.sendInputDisplay ? <div className="pc-sub-messages-send-wrapper appear-div">
                        <div className="pc-sub-messages-send-name-input">
                            <input onChange={this.handleSendSubNameChange.bind(this)} type="text" placeholder="你的昵称"/>
                        </div>
                        <div className="pc-sub-messages-send-content-input">
                            <textarea onChange={this.handleSendSubContentChange.bind(this)} rows="4" placeholder="回复内容"/>
                        </div>
                        <div className="pc-sub-messages-send-area">
                            <div onClick={this.handleReply.bind(this)} className="pc-sub-messages-close-button">
                                收起
                            </div>
                            <div onClick={this.handleSendReply.bind(this)} className="pc-sub-messages-send-button">
                                发送
                            </div>
                        </div>
                    </div> : <div onClick={this.handleReply.bind(this)} className="pc-message-detail-reply">
                        回复
                    </div>
                }
                {(this.state.subMessage === undefined || this.state.subMessage.length === 0) ? null :
                    <div className="pc-sub-message-detail-wrapper">
                        {this.state.subMessage.map((item, key) => {
                        return <div className="pc-sub-message-detail-content" key={ item._id }>
                                <div className="pc-message-detail-title">
                                    <div className="pc-message-detail-name">
                                        {item.name}
                                    </div>
                                    <div className="pc-message-detail-time">
                                        {formISODate(item.send_time)}
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