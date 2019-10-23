import React from 'react';
import './albums.css';
import {Link} from "react-router-dom";
import { fetchGet, serverUrl } from "../../../util/HttpUtil";


class PCAlbums extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        fetchGet('/photo/getAlbumList', null, null).then((res) => {
            if(res.code === 1){
                console.log(res);
                this.setState({
                    albums: res.data
                });
            }
        }, (fail) => {
            // TODO 处理请求fail
        });
    }

    render() {
        return(
            <div className="pc-albums-wrapper">
                <div className="albums-cover-wrapper">
                    {this.state.albums.map((item, key) => {
                        return <div id={ "albums-cover-" + item._id } key={ item._id } className="albums-cover">
                                {key % 2 === 0 ?
                                    <Link to={ 'content/' + item._id }>
                                        <div style={{ backgroundImage: "url(" + serverUrl + '/' + item.cover + ")" }} className="albums-cover-img">
                                        </div>
                                        <div className="albums-cover-name">
                                            { item.name }
                                        </div>
                                    </Link> :
                                    <Link to={ 'content/' + item._id }>
                                        <div className="albums-cover-name">
                                            { item.name }
                                        </div>
                                        <div style={{ backgroundImage: "url(" + serverUrl + '/' + item.cover + ")" }} className="albums-cover-img">
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