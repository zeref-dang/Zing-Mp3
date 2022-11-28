import React, { useEffect, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { InfoArtists } from "../../../../appState/infoArtists";
import { PlaySong } from "../../../../appState/PlaySong";
import "./artistsAllSongI.scss";
import CardMusic from "../../../cardMusic";

const ArtistsAllSongI = () => {
  const info = useRecoilValue(InfoArtists);
  const [playSong, setPlaySong] = useRecoilState(PlaySong);
  const songI = info.sections.find((item) => item.title === "Bài hát nổi bật");
  let ref = useRef(0);
  let indexImg = 2;

  const slideShow = () => {
    const thumbnailItem = document.querySelectorAll(".thumbnailItem");
    const thumbnailItemI = document.querySelector(".thumbnailItem.first");
    const thumbnailItemII = document.querySelector(".thumbnailItem.second");
    const thumbnailItemIII = thumbnailItem[indexImg];
    const thumbnailItemIIII =
      thumbnailItem[indexImg === thumbnailItem.length - 1 ? 0 : indexImg + 1];

    thumbnailItemI?.classList.replace("first", "fourth");
    thumbnailItemII?.classList.replace("second", "first");
    thumbnailItemIII?.classList.replace("third", "second");
    thumbnailItemIIII?.classList.replace("fourth", "third");

    indexImg++;
    if (indexImg >= thumbnailItem.length) {
      indexImg = 0;
    }
  };

  useEffect(() => {
    indexImg = 2;
    const thumbnailItem = document.querySelectorAll(".thumbnailItem");
    if (!thumbnailItem) return;
    ref.current = setInterval(() => {
      slideShow();
    }, 2300);
    return () => {
      clearInterval(ref.current);
    };
  }, [songI]);

  return (
    <div className="artistsAllSongIWraper">
      <h2>{songI.title}</h2>
      <div className="inner">
        <div className="thumbnail">
          <ul className="thumbnailList">
            {songI.items.map((item, index) => {
              let classs = "fourth";
              index === 0 ? (classs = "first") : "";
              index === 1 ? (classs = "second") : "";
              index === 2 ? (classs = "third") : "";
              return (
                <li key={item.encodeId} className={`thumbnailItem ${classs}`}>
                  <img src={item.thumbnailM} />
                </li>
              );
            })}
          </ul>
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
                onClick={() => setPlaySong({ ...playSong, id: item.encodeId })}
              />
            );
            // return (
            //   <div
            //     key={item.encodeId}
            //     className="SongItem"
            //     onClick={() => setPlaySong({ ...playSong, id: item.encodeId })}
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
      </div>
    </div>
  );
};

export default ArtistsAllSongI;
