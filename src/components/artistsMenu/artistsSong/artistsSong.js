import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { InfoArtists } from "../../../appState/infoArtists";
import { PlaySong } from "../../../appState/PlaySong";
import Button from "../../lib/button/button";
import NotiNoSomething from "../../notiNoSomething";
import CardMusic from "../../cardMusic";
import "./artistsSong.scss";

const ArtistsSong = () => {
  const info = useRecoilValue(InfoArtists);
  const songI = info.sections.find((item) => item.title === "Bài hát nổi bật");
  const [playSong, setPlaySong] = useRecoilState(PlaySong);

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
                let time =
                  Math.floor(item.duration / 60) +
                  ":" +
                  (item.duration - Math.floor(item.duration / 60) * 60);
                let vip = item.isWorldWide !== true;
                return (
                  <CardMusic
                    key={item.encodeId}
                    img={item.thumbnailM}
                    name={item.title}
                    describe={item.artistsNames}
                    album={item.album ? item.album.title : ""}
                    time={time}
                    vip={vip}
                    onClick={() =>
                      setPlaySong({ ...playSong, id: item.encodeId })
                    }
                  />
                );
                // return (
                //   <div
                //     key={item.encodeId}
                //     className="SongItem"
                //     onClick={() =>
                //       setPlaySong({ ...playSong, id: item.encodeId })
                //     }
                //   >
                //     <div className="left">
                //       <div className="Thumbnail">
                //         <img src={item.thumbnailM} />
                //       </div>
                //       <div className="cardInfo">
                //         <div className="nameSong">{item.title}</div>
                //         <div className="singer">{item.artistsNames}</div>
                //       </div>
                //       {item.isWorldWide !== true && (
                //         <div className="vip">{VIP}</div>
                //       )}
                //     </div>
                //     <div className="content">
                //       <div className="infoAlbum">
                //         {item.album ? item.album.title : ""}
                //       </div>
                //     </div>
                //     <div className="right">
                //       <div className="timeSong">
                //         {Math.floor(item.duration / 60) +
                //           ":" +
                //           (item.duration - Math.floor(item.duration / 60) * 60)}
                //       </div>
                //     </div>
                //   </div>
                // );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArtistsSong;
