import React from 'react';
import './albums.css';
import {Link} from "react-router-dom";
import swal from '@sweetalert/with-react';
import {serverUrl, fetchGet} from "../../../util/HttpUtil";

class PCAlbumContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album_id: props.match.params.id,
            photos: [],
            albumCardDisplay: false
        }
    }

    componentDidMount() {
        let params = new Map();
        params.set('album_id', this.state.album_id);
        fetchGet('/photo/getByAlbumId', params, null).then((res) => {
            if(res.code === 1){
                console.log(res);
                this.setState({
                    photos: res.data.photos
                }, () => {
                    console.log(this.state.photos);
                });
            }
        }, (fail) => {
            // TODO 处理请求fail
        });
    }

    setModalVisible(data) {
        // this.setState({
        //     albumCardDisplay
        // });
        swal({
            button: null,
            content: (
                <div style={{ backgroundImage: 'url(' + serverUrl + '/' + data.img + ')' }} className="pc-album-photo-modal"/>
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
                  {this.state.photos.map((item) => {
                      return (
                          <div onClick={() => this.setModalVisible(item)} key={ item._id } id={'pc-album-photo' + item.i_d} className="pc-album-photo">
                            <img src={ serverUrl + '/' + item.img } alt=""/>
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