import React, { useEffect, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { InfoArtists } from "../../../../appState/infoArtists";
import { PlaySong } from "../../../../appState/PlaySong";
import "./artistsAllSongI.scss";

const VIP = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="26px"
    height="12px"
    viewBox="0 0 26 12"
    version="1.1"
  >
    <title>label VIP</title>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="Header/vip"
        transform="translate(-1024.000000, -50.000000)"
        fillRule="nonzero"
      >
        <g id="icon-header" transform="translate(813.500000, 12.000000)">
          <g id="ava" transform="translate(200.000000, 0.000000)">
            <g id="Group" transform="translate(9.000000, 37.000000)">
              <g id="small-vip" transform="translate(2.000000, 1.000000)">
                <rect
                  id="Rectangle-Copy-2"
                  fill="#FFDB00"
                  x="0"
                  y="0"
                  width="25"
                  height="12"
                  rx="3"
                />
                <path
                  d="M7.33807531,9.2 C6.96903766,9.2 6.71422594,8.99790795 6.57364017,8.66401674 L4.5790795,3.89288703 C4.53514644,3.7874477 4.5,3.68200837 4.5,3.56778243 C4.5,3.18995816 4.79874477,2.9 5.17656904,2.9 C5.52803347,2.9 5.75648536,3.10209205 5.86192469,3.37447699 L7.39958159,7.35481172 L8.95481172,3.33054393 C9.04267782,3.11087866 9.27991632,2.9 9.60502092,2.9 C9.97405858,2.9 10.2728033,3.18117155 10.2728033,3.55020921 C10.2728033,3.65564854 10.2376569,3.76987448 10.2025105,3.84895397 L8.19037657,8.66401674 C8.04979079,8.99790795 7.79497908,9.2 7.42594142,9.2 L7.33807531,9.2 Z M12.0545328,8.47949791 L12.0545328,3.57656904 C12.0545328,3.19874477 12.3532775,2.9 12.7311018,2.9 C13.1089261,2.9 13.4076708,3.19874477 13.4076708,3.57656904 L13.4076708,8.47949791 C13.4076708,8.85732218 13.1089261,9.15606695 12.7311018,9.15606695 C12.3532775,9.15606695 12.0545328,8.85732218 12.0545328,8.47949791 Z M15.6287308,8.47949791 L15.6287308,3.6292887 C15.6287308,3.25146444 15.9274756,2.95271967 16.3052998,2.95271967 L18.1417015,2.95271967 C19.6090655,2.95271967 20.4965132,3.82259414 20.4965132,5.0790795 L20.4965132,5.09665272 C20.4965132,6.52008368 19.3894003,7.258159 18.0099023,7.258159 L16.9818689,7.258159 L16.9818689,8.47949791 C16.9818689,8.85732218 16.6831241,9.15606695 16.3052998,9.15606695 C15.9274756,9.15606695 15.6287308,8.85732218 15.6287308,8.47949791 Z M16.9818689,6.05439331 L18.0538354,6.05439331 C18.7304044,6.05439331 19.1258019,5.65020921 19.1258019,5.12301255 L19.1258019,5.10543933 C19.1258019,4.49916318 18.7040446,4.17405858 18.0274756,4.17405858 L16.9818689,4.17405858 L16.9818689,6.05439331 Z"
                  id="VIP-Copy"
                  fill="#362800"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

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
            return (
              <div
                key={item.encodeId}
                className="SongItem"
                onClick={() => setPlaySong({ ...playSong, id: item.encodeId })}
              >
                <div className="left">
                  <div className="Thumbnail">
                    <img src={item.thumbnailM} />
                  </div>
                  <div className="cardInfo">
                    <div className="nameSong">{item.title}</div>
                    <div className="singer">{item.artistsNames}</div>
                  </div>
                  {item.isWorldWide !== true && (
                    <div className="vip">{VIP}</div>
                  )}
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
      </div>
    </div>
  );
};

export default ArtistsAllSongI;
