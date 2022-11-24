import React, { useState } from "react";
import "./playerControl.scss";
const PlayerControl = () => {
  const [volume, setVolume] = useState(0);
  const [timeLine, setTimeLine] = useState(0);
  return (
    <div className="playerControlWraper">
      <div className="inner">
        <div className="left">
          <div className="img">
            <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/a/a/b/8aab7a0386dd9c24b90adcc5ef5a7814.jpg" />
          </div>
          <div className="name">
            <div className="title">Chấm Hết</div>
            <div className="subTitle">
              <p>Sơn Tùng M-TP</p>
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
            <div className="control control-btn-toggle-play">
              <i className="icon ic-play-circle-outline size-40px"></i>
            </div>

            <div className="control control-btn-next">
              <i className="icon ic-next size-16px"></i>
            </div>
            <div className="control control-btn-random">
              <i className="icon ic-repeat size-16px"></i>
            </div>
          </div>
          <div className="player-bottom">
            <div className="time">1:36</div>
            <input
              id="progress"
              class="progress"
              type="range"
              value={timeLine}
              step="1"
              min="0"
              max="100"
              style={{
                background: `linear-gradient(90deg, var(--progressbar-active-bg) ${timeLine}%, var(--progressbar-player-bg) ${timeLine}%)`,
              }}
              onChange={(e) => {
                setTimeLine(e.target.value);
              }}
            />
            <div className="time">5:15</div>
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
              class="progress"
              type="range"
              value={volume}
              step="1"
              min="0"
              max="100"
              style={{
                background: `linear-gradient(90deg, var(--progressbar-active-bg) ${volume}%, var(--progressbar-player-bg) ${volume}%)`,
              }}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />
          </div>
          <div className="listSong">
            <i className="icon ic-list-music size-24px"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControl;
