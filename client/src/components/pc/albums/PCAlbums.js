import React from 'react';
import './albums.css';
import {Link} from "react-router-dom";


class PCAlbums extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: [
                {
                    id: 1,
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906935905&di=21e16a6262543d2c68c4fb3b2cada1b7&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201602%2F15%2F20160215111253_dAwNk.thumb.700_0.jpeg",
                    name: "淡烟枫叶路"
                },
                {
                    id: 2,
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566903572331&di=351b5ac6614dabad6183a4b953b52a17&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F82af50613acdb9f5feb66a7af3db0b3fd61a8a836471f-PtxlOw_fw658",
                    name: "细雨蓼花时"
                },
                {
                    id: 3,
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566903572331&di=351b5ac6614dabad6183a4b953b52a17&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F82af50613acdb9f5feb66a7af3db0b3fd61a8a836471f-PtxlOw_fw658",
                    name: "南浦清江桥"
                },
                {
                    id: 4,
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566903572331&di=351b5ac6614dabad6183a4b953b52a17&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F82af50613acdb9f5feb66a7af3db0b3fd61a8a836471f-PtxlOw_fw658",
                    name: "歌尽扇底风"},
                {
                    id: 5,
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566903572331&di=351b5ac6614dabad6183a4b953b52a17&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F82af50613acdb9f5feb66a7af3db0b3fd61a8a836471f-PtxlOw_fw658",
                    name: "舞低楼心栎"
                },
                {
                    id: 6,
                    img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566903572331&di=351b5ac6614dabad6183a4b953b52a17&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F82af50613acdb9f5feb66a7af3db0b3fd61a8a836471f-PtxlOw_fw658",
                    name: "京与旧铺"
                }
            ]
        };
    }

    render() {
        return(
            <div className="pc-albums-wrapper">
                <div className="albums-cover-wrapper">
                    {this.state.albums.map((item, key) => {
                        return <div id={ "albums-cover-" + item.id } key={ key } className="albums-cover">
                                {key % 2 === 0 ?
                                    <Link to={ 'content/' + item.id }>
                                        <div style={{ backgroundImage: "url(" + item.img + ")" }} className="albums-cover-img">
                                        </div>
                                        <div className="albums-cover-name">
                                            { item.name }
                                        </div>
                                    </Link> :
                                    <Link to={ 'content/' + item.id }>
                                        <div className="albums-cover-name">
                                            { item.name }
                                        </div>
                                        <div style={{ backgroundImage: "url(" + item.img + ")" }} className="albums-cover-img">
                                        </div>
                                    </Link>
                                }
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default PCAlbums;