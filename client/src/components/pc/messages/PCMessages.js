import React from 'react';
import './messages.css';
import PCMessageDetail from "./PCMessageDetail";
import { isStringEmpty } from "../../../util/CommonUtil";
import { fetchGet, fetchPost } from "../../../util/HttpUtil";
import swal from "@sweetalert/with-react";

class PCMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            messages: [],
            sendInputName: '',
            sendInputContent: ''
        }
    }

    componentDidMount() {
        fetchGet('/message/getByPage', null, null).then((res) => {
            if(res.code === 1){
                console.log(res);
                this.setState({
                    messages: res.data,
                    total: res.data.length
                });
            }
        }, (fail) => {
            // TODO 处理请求fail
        });
    }

    sendNewMessage() {
        if(isStringEmpty(this.state.sendInputName) || isStringEmpty(this.state.sendInputContent)) {
            console.log('请完善留言信息^_^');
        } else {
            let params = new Map();
            params.set('name', this.state.sendInputName);
            params.set('content', this.state.sendInputContent);
            fetchPost('/message/addMessage', null, params, null).then((res) => {
                if(res.code === 1){

                    swal("发送成功!", {
                        buttons: false,
                        timer: 800,
                    });

                    this.setState({
                        messages: [ res.data, ...this.state.messages ],
                        total: this.state.total + 1,
                        sendInputName: '',
                        sendInputContent: ''
                    });
                }
            }, (fail) => {
                // TODO 处理请求fail
            });
        }
    }

    handleSendNameChange(e) {
        this.setState({
            sendInputName: e.target.value
        })
    }

    handleSendContentChange(e) {
        this.setState({
            sendInputContent: e.target.value
        })
    }

    render() {
        return(
            <div className="pc-messages-wrapper">
                <div className="pc-messages-intro">
                    <p>Hi there ~ 有什么想对我说的吗</p>
                    <div className="pc-messages-send-wrapper">
                        <div className="pc-messages-send-name-input">
                            <input value={this.state.sendInputName} onChange={this.handleSendNameChange.bind(this)} type="text" placeholder="你的昵称"/>
                        </div>
                        <div className="pc-messages-send-content-input">
                            <textarea value={this.state.sendInputContent} onChange={this.handleSendContentChange.bind(this)} rows="4" placeholder="留言内容"/>
                        </div>
                        <div onClick={this.sendNewMessage.bind(this)} className="pc-messages-send-button">
                            发送
                        </div>
                    </div>
                    <div className="pc-messages-intro-total">
                        共计 {this.state.total} 条留言
                    </div>
                </div>
                {this.state.messages.map((item, key) => {
                    return <PCMessageDetail message={ item } index={ key } key={ item._id }/>
                })}
            </div>
        );
    }
}

export default PCMessages;