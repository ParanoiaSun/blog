import React from 'react';
import './albums.css';
import {Link} from "react-router-dom";
import swal from '@sweetalert/with-react'

class PCAlbumContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album: {
                album_id: 1,
                photos: [
                    {
                        id: 1,
                        description: "今天天气不错",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906935905&di=21e16a6262543d2c68c4fb3b2cada1b7&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201602%2F15%2F20160215111253_dAwNk.thumb.700_0.jpeg",
                        create_time: "2019-09-28 19:01:23"
                    },
                    {
                        id: 2,
                        description: "今天天气不好",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906935905&di=21e16a6262543d2c68c4fb3b2cada1b7&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201602%2F15%2F20160215111253_dAwNk.thumb.700_0.jpeg",
                        create_time: "2019-09-28 19:02:23"
                    },
                    {
                        id: 3,
                        description: "今天下雨了",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906935905&di=21e16a6262543d2c68c4fb3b2cada1b7&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201602%2F15%2F20160215111253_dAwNk.thumb.700_0.jpeg",
                        create_time: "2019-09-28 19:03:23"
                    },
                    {
                        id: 4,
                        description: "今天下雨了",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906935905&di=21e16a6262543d2c68c4fb3b2cada1b7&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201602%2F15%2F20160215111253_dAwNk.thumb.700_0.jpeg",
                        create_time: "2019-09-28 19:03:23"
                    },
                    {
                        id: 5,
                        description: "今天下雨了",
                        img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566906935905&di=21e16a6262543d2c68c4fb3b2cada1b7&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201602%2F15%2F20160215111253_dAwNk.thumb.700_0.jpeg",
                        create_time: "2019-09-28 19:03:23"
                    }
                ]
            },
            albumCardDisplay: false
        }
    }

    setModalVisible(data) {
        // this.setState({
        //     albumCardDisplay
        // });
        swal({
            button: null,
            content: (
                <div style={{ backgroundImage: 'url(' + data.img + ')' }} className="pc-album-photo-modal"/>
            )
        })
    }

    render() {
        return(
          <div className="pc-album-detail">
              <div className="pc-album-detail-back-link">
                  <Link to="/albums/list">
                      <span className="icon-link">&#58926;</span>
                      <span>返回相册列表</span>
                  </Link>
              </div>
              <div className="pc-album-photos-wrapper">
                  {this.state.album.photos.map((item, key) => {
                      return (
                          <div onClick={() => this.setModalVisible(item)} key={key} id={'pc-album-photo' + item.id} className="pc-album-photo">
                            <img src={ item.img } alt=""/>
                          </div>
                      )
                  })}
              </div>
              {this.state.albumCardDisplay ? <div>
                  <img src="" alt=""/>
              </div> : null}
          </div>
        );
    }
}

export default PCAlbumContent;