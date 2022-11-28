import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { PlaySong } from "../../../appState/PlaySong";
import { Screen } from "../../../appState/screen";
import { ApiTool } from "../../../tools";
import "./playerControl.scss";

const PlayerControl = () => {
  const controlPlayer = JSON.parse(localStorage.getItem("ControlPlayer")) || {};
  const [volume, setVolume] = useState(0);
  const [timeLine, setTimeLine] = useState(0);
  const [playSong, setPlaySong] = useRecoilState(PlaySong);
  const setScreen = useSetRecoilState(Screen);
  const [timestart, setTimestart] = useState(0);

  const isHasControl = controlPlayer.isHasControl === undefined ? false : true;

  const audioE1 = useRef(new Audio());
  const [sourse, setSourse] = useState("");
  const [infoSong, setInfoSong] = useState("");

  useEffect(() => {
    if (playSong.id) {
      const params = {
        id: playSong.id,
      };
      const AudioSong = ApiTool.queryGetFromJson(
        "https://api-zingmp3-public.herokuapp.com/api/song",
        params,
        (key) => {
          setSourse(key.data["128"]);
          setPlaySong({ ...playSong, isPlay: true });
          controlPlayer.linkSong = key.data["128"];
          controlPlayer.isHasControl = true;
          localStorage.setItem("ControlPlayer", JSON.stringify(controlPlayer));
          setScreen(true);
        }
      );
      const AudioInfoSong = ApiTool.queryGetFromJson(
        "https://api-zingmp3-public.herokuapp.com/api/infosong",
        params,
        (key) => {
          setInfoSong(key.data);
          controlPlayer.info = key.data;
          localStorage.setItem("ControlPlayer", JSON.stringify(controlPlayer));
        }
      );
      return () => {
        AudioSong.abort();
        AudioInfoSong.abort();
      };
    }
  }, [playSong.id]);

  useEffect(() => {
    setInfoSong(controlPlayer.info);
    setSourse(controlPlayer.linkSong);
    setVolume(controlPlayer.volume);
    setPlaySong({ ...playSong, repeat: controlPlayer.repeat });
  }, []);

  console.log(controlPlayer.repeat);
  console.log(playSong);

  useEffect(() => {
    audioE1.current.pause();
    audioE1.current.src = sourse;
    audioE1.current.load();
    if (playSong.isPlay) audioE1.current.play();
  }, [sourse]);

  // ml này update liên tục làm nó component render miết luôn vcl
  // hiện tạo bó phép với nó luôn :V
  useEffect(() => {
    audioE1.current.ontimeupdate = function () {
      setTimestart(Math.floor(audioE1.current.currentTime));
      setTimeLine(
        Math.floor(
          (audioE1.current.currentTime / audioE1.current.duration) * 100
        )
      );

      // if (
      //   Math.floor(
      //     (audioE1.current.currentTime / audioE1.current.duration) * 100
      //   )
      // ) {
      //   controlPlayer.timeLine = Math.floor(
      //     (audioE1.current.currentTime / audioE1.current.duration) * 100
      //   );
      //   localStorage.setItem("ControlPlayer", JSON.stringify(controlPlayer));
      // }
    };
  }, []);

  useEffect(() => {
    const handleEnd = () => {
      if (playSong.repeat) {
        audioE1.current.play();
      }
    };
    console.log(playSong);
    audioE1.current.addEventListener("ended", handleEnd);
    return () => {
      audioE1.current.removeEventListener("ended", handleEnd);
    };
  }, [playSong.repeat]);

  const handlePause = () => {
    if (playSong.isPlay) {
      audioE1.current.pause();
      setPlaySong({ ...playSong, isPlay: false });
    } else {
      audioE1.current.play();
      setPlaySong({ ...playSong, isPlay: true });
    }
  };

  const handleRepeat = () => {
    if (playSong.repeat) {
      setPlaySong({ ...playSong, repeat: false });
      controlPlayer.repeat = false;
      localStorage.setItem("ControlPlayer", JSON.stringify(controlPlayer));
    } else {
      setPlaySong({ ...playSong, repeat: true });
      controlPlayer.repeat = true;
      localStorage.setItem("ControlPlayer", JSON.stringify(controlPlayer));
    }
  };

  const onChangeVolume = (e) => {
    setVolume(e.target.value);
    let a = e.target.value / 100;
    audioE1.current.volume = a;
    controlPlayer.volume = e.target.value;
    localStorage.setItem("ControlPlayer", JSON.stringify(controlPlayer));
  };

  return (
    <div
      className="playerControlWraper"
      style={isHasControl ? { display: "block" } : { display: "none" }}
    >
      <div className="inner">
        <div className="left">
          <div className="img">
            <img src={infoSong ? infoSong.thumbnailM : ""} />
          </div>
          <div className="name">
            <div className="title">{infoSong ? infoSong.title : ""}</div>
            <div className="subTitle">
              <p>{infoSong ? infoSong.artistsNames : ""}</p>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="player-top">
            <div className="control control-btn-repeat">
              <i className="icon ic-shuffle size-16px"></i>
            </div>
            <div className="control control-btn-prev">
              <i className="icon ic-pre size-16px"></i>
            </div>
            <div
              className="control control-btn-toggle-play"
              onClick={() => handlePause()}
            >
              {playSong.isPlay ? (
                <i className="icon ic-pause-circle-outline size-40px"></i>
              ) : (
                <i className="icon ic-play-circle-outline size-40px"></i>
              )}
            </div>

            <div className="control control-btn-next">
              <i className="icon ic-next size-16px"></i>
            </div>
            <div
              className="control control-btn-random"
              onClick={() => handleRepeat()}
            >
              {playSong.repeat ? (
                <i className="icon ic-repeat-one size-16px icon-color"></i>
              ) : (
                <i className="icon ic-repeat size-16px "></i>
              )}
            </div>
          </div>
          <div className="player-bottom">
            <div className="time">
              {timestart
                ? Math.floor(timestart / 60) +
                  ":" +
                  (timestart - Math.floor(timestart / 60) * 60)
                : "0:0"}
            </div>
            <input
              id="progress"
              className="progress"
              type="range"
              value={timeLine ? timeLine : 0}
              step="1"
              min="0"
              max="100"
              style={{
                background: `linear-gradient(90deg, var(--progressbar-active-bg) ${
                  timeLine ? timeLine : 0
                }%, var(--progressbar-player-bg) ${timeLine ? timeLine : 0}%)`,
              }}
              onChange={(e) => {
                let a = (e.target.value / 100) * audioE1.current.duration;
                audioE1.current.currentTime = a;
              }}
            />
            <div className="time">
              {infoSong
                ? Math.floor(infoSong.duration / 60) +
                  ":" +
                  (infoSong.duration - Math.floor(infoSong.duration / 60) * 60)
                : "0:0"}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="lyric">
            <i className="icon ic-karaoke size-16px"></i>
          </div>
          <div className="volume">
            <i className="icon ic-volume size-16px"></i>
            <input
              id="progress"
              className="progress"
              type="range"
              value={volume ? volume : 100}
              step="1"
              min="0"
              max="100"
              style={{
                background: `linear-gradient(90deg, var(--progressbar-active-bg) ${
                  volume ? volume : 100
                }%, var(--progressbar-player-bg) ${volume ? volume : 100}%)`,
              }}
              onChange={(e) => {
                onChangeVolume(e);
              }}
            />
          </div>
          <div className="list">
            <i className="icon ic-list-music size-16px"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControl;
