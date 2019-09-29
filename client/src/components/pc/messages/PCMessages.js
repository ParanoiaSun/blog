import React from 'react';
import './messages.css';
import PCMessageDetail from "./PCMessageDetail";

class PCMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                total: 4,
                messages: [
                    {
                        "content": "人生，是一个演绎出来的故事，这个故事，也许温暖，也许冷漠。人生这个大故事，只要有付出，通过努力，上天会给予你一个回报的。 也许，你付出了辛勤，却没有得到回报，也别忧伤，相信，总有一天，花会重开，候鸟回来。一切有因，即有果。",
                        "name": "Beth Ann",
                        "send_time": "2019-09-23 18:11:23"
                    },
                    {
                        "content": "大自然是美的，世界是美的，我们也是美的。只要眼里有美，心里就有大美;只要心里有美，生活才会至美;只要生活有美，生命才能唯美。美，是一种接受，是一种感受，是一种享受。美，五彩斑斓，随心而生;美，无处不在，随心而行;美，无止无境，随心而动。",
                        "name": "Beth Ann",
                        "send_time": "2019-09-22 18:11:23",
                        "sub_message": [
                            {
                                "content": "大自然是美的，世界是美的，我们也是美的。只要眼里有美，心里就有大美;只要心里有美，生活才会至美;只要生活有美，生命才能唯美。美，是一种接受，是一种感受，是一种享受。美，五彩斑斓，随心而生;美，无处不在，随心而行;美，无止无境，随心而动。",
                                "name": "Beth Ann",
                                "send_time": "2019-09-23 18:11:23"
                            },
                            {
                                "content": "大自然是美的，世界是美的，我们也是美的。只要眼里有美，心里就有大美;只要心里有美，生活才会至美;只要生活有美，生命才能唯美。美，是一种接受，是一种感受，是一种享受。美，五彩斑斓，随心而生;美，无处不在，随心而行;美，无止无境，随心而动。",
                                "name": "Beth Ann",
                                "send_time": "2019-09-22 18:11:23"
                            }
                        ]
                    },
                    {
                        "content": "心灵向往之间你雨露得美好的国度。我一次得找过你一年的星火沉着的美丽。那迷人的身姿。 岁月的时光犹如俊美的内涵。最美，向往欣然接受的美好，美丽的星空是最美的洋溢。 时光，美丽 泪，增添了美的显眼。",
                        "name": "Beth Ann",
                        "send_time": "2019-09-21 18:11:23"
                    },
                    {
                        "content": "我喜欢美，也同时有着一双寻觅世界美的眼睛，也许世界真的很美，你觉得呢。每当太阳初升的那一刻，有着朝霞的美，下山的那一瞬，也有着晚霞的美。当然当秋天来临，清晨早起散步时细心的你也会发现，小花小草被一层的露珠附着，在晨光的照耀下，显得晶莹剔透",
                        "name": "Beth Ann",
                        "send_time": "2019-09-20 18:11:23"
                    }
                ]
            }
        }
    }

    render() {
        return(
            <div className="pc-messages-wrapper">
                <div className="pc-messages-intro">
                    Hi there ~ 有什么想对我说的吗 &nbsp;
                    <span className="nampo-icon">&#xe6b3;</span>
                    <div className="pc-messages-send-wrapper">
                        <div className="pc-messages-send-name-input">
                            <input type="text" placeholder="你的昵称"/>
                        </div>
                        <div className="pc-messages-send-content-input">
                            <textarea rows="4" placeholder="留言内容"/>
                        </div>
                        <div className="pc-messages-send-button">
                            发送
                        </div>
                    </div>
                    <div className="pc-messages-intro-total">
                        共计 {this.state.data.total} 条留言
                    </div>
                </div>
                {this.state.data.messages.map((item, key) => {
                    return <PCMessageDetail message={ item } index={key} key={ key }/>
                })}
            </div>
        );
    }
}

export default PCMessages;