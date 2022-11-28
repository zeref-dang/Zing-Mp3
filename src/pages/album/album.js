import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./album.scss";
import Button from "../../components/lib/button";
import { ApiTool } from "../../tools";
import { useParams } from "react-router-dom";
import ListSong from "../../components/listSong/listSong";
import { useRecoilState } from "recoil";
import { PlaySong } from "../../appState/PlaySong";
import { TimeTool } from "../../tools/timeTool";
import Loading from "../../components/loading";
import LayoutAlbum from "../../components/layoutAlbum";

const columns = [
  {
    id: 1,
    field: "Song",
    name: "Bài hát",
    width: "50%",
  },
  {
    id: 2,
    field: "Album",
    name: "Album",
    width: "40%",
  },
  {
    id: 3,
    field: "Time",
    name: "Thời gian",
    width: "10%",
  },
];

const Album = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState();
  const [infoAlbum, setInfoAlbum] = useState([]);
  const [playSong, setPlaySong] = useRecoilState(PlaySong);
  const [playlistI, setPlaylistI] = useState();
  const [playlistII, setPlaylistII] = useState();
  const [playlistIII, setPlaylistIII] = useState();
  const [playlistIV, setPlaylistIV] = useState();

  const idRef = useRef(id);

  useEffect(() => {
    const params = {
      id: id,
    };
    console.log("render");
    const api = ApiTool.queryGetFromJson(
      "https://api-zingmp3-public.herokuapp.com/api/detailplaylist",
      params,
      (key) => {
        setAlbumData(key.data);
        idRef.current = id;
      }
    );
    const apiII = ApiTool.get(
      `https://api-zingmp3.vercel.app/api/suggestedplaylists/${id}`,
      (key) => {
        setInfoAlbum(key.data);
      }
    );
    return () => {
      api.abort();
      apiII.abort();
    };
  }, [id]);

  console.log(idRef.current);

  useEffect(() => {
    infoAlbum.map((item) => {
      switch (item.title) {
        case "Có Thể Bạn Quan Tâm":
          setPlaylistI(item.items.slice(0, 5));
          break;
        case "V-Pop":
          setPlaylistII(item.items.slice(0, 5));
          break;
        case "Dance Pop":
          setPlaylistIII(item.items.slice(0, 5));
          break;
        case "Pop":
          setPlaylistIV(item.items.slice(0, 5));
          break;
      }
    });
  }, [infoAlbum]);

  if (albumData && infoAlbum && idRef.current === id) {
    let random = Math.floor(Math.random() * albumData.song.items.length);
    return (
      <div className="album">
        <div className="header">
          <div className="thumb">
            <div className="allImg">
              <div className="img">
                <img src={albumData.thumbnailM} />
              </div>
              <div className="darkImg">
                <div className="img">
                  <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.7.65/static/media/play.81e7696e.svg" />
                </div>
              </div>
            </div>
            <div className="media-content">
              <h2>{albumData.title}</h2>
              <div className="subTitle">
                <div className="release">
                  cập nhập:
                  {TimeTool.getFormartTimeDDYY(albumData.contentLastUpdate)}
                </div>
                <div className="artists">{albumData.artistsNames}</div>
                <div className="like">
                  {`${albumData.like} người yêu thích`}
                </div>
              </div>
            </div>
            <div className="btn">
              <div
                onClick={() =>
                  setPlaySong({
                    ...playSong,
                    id: albumData.song.items[random].encodeId,
                  })
                }
              >
                <Button
                  White
                  primary
                  leftIcon={<i className="icon ic-play"></i>}
                >
                  Phát ngẫu nhiên
                </Button>
              </div>
            </div>
          </div>
          <ListSong columns={columns} rows={albumData.song.items} />
        </div>
        <div className="body">
          {playlistI ? (
            <LayoutAlbum title="Có Thể Bạn Quan Tâm" column={playlistI} />
          ) : (
            ""
          )}
        </div>
        <div className="body">
          {playlistII ? <LayoutAlbum title="V-Pop" column={playlistII} /> : ""}
        </div>
        <div className="body">
          {playlistIII ? (
            <LayoutAlbum title="Dance Pop" column={playlistIII} />
          ) : (
            ""
          )}
        </div>
        <div className="body">
          {playlistIV ? <LayoutAlbum title="Pop" column={playlistIV} /> : ""}
        </div>
      </div>
    );
  } else {
    return (
      <div className="albumLoading">
        <Loading />
      </div>
    );
  }
};

Album.propTypes = {
  //
};

export default Album;
