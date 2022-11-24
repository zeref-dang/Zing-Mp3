import React from "react";
import { useRecoilValue } from "recoil";
import { InfoArtists } from "../../../appState/infoArtists";
import Button from "../../lib/button/button";
import NotiNoSomething from "../../notiNoSomething";
import "./artistsSong.scss";

const ArtistsSong = () => {
  const info = useRecoilValue(InfoArtists);
  const songI = info.sections.find((item) => item.title === "Bài hát nổi bật");

  return (
    <div className="artistsSongWraper">
      <div className="inner">
        {!songI ? (
          <NotiNoSomething />
        ) : (
          <>
            <div className="title">
              <h2>Danh Sách Bài Hát</h2>
              <Button
                small
                white
                primary
                leftIcon={<i className="icon ic-play size-14px"></i>}
              >
                <h4>Phát tất cả</h4>
              </Button>
            </div>
            <div className="song">
              {songI.items.map((item) => {
                return (
                  <div key={item.encodeId} className="SongItem">
                    <div className="left">
                      <div className="Thumbnail">
                        <img src={item.thumbnailM} />
                      </div>
                      <div className="cardInfo">
                        <div className="nameSong">{item.title}</div>
                        <div className="singer">{item.artistsNames}</div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="infoAlbum">
                        {item.album ? item.album.title : ""}
                      </div>
                    </div>
                    <div className="right">
                      <div className="timeSong">
                        {Math.floor(item.duration / 60) +
                          ":" +
                          (item.duration - Math.floor(item.duration / 60) * 60)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArtistsSong;
