import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { HomeState } from "../../appState/homeState";
import { PlaySong } from "../../appState/PlaySong";
import "./sliderHome.scss";

const SliderHome = () => {
  const clearSetIntervalRef = useRef();
  const homeState = useRecoilValue(HomeState);
  const [playSong, setPlaySong] = useRecoilState(PlaySong);
  const navigate = useNavigate();

  let banner = {};
  if (homeState.data) {
    banner = homeState.data.filter((item) => item.sectionType === "banner")[0]
      .items;
  }

  const onChangeSliderNext = () => {
    const previous = document.querySelector(".slider-previous");
    const selected = document.querySelector(".slider-selected");
    const next = document.querySelector(".slider-next");
    const last = document.querySelector(".slider-last");
    const add = document.querySelector(".slider-add");
    const first = document.querySelector(".slider-first");

    previous.classList.replace("slider-previous", "slider-first");
    selected.classList.replace("slider-selected", "slider-previous");
    next.classList.replace("slider-next", "slider-selected");
    last.classList.replace("slider-last", "slider-next");
    add.classList.replace("slider-add", "slider-last");
    first.classList.replace("slider-first", "slider-add");
  };

  const onChangeSliderPrev = () => {
    const previous = document.querySelector(".slider-previous");
    const selected = document.querySelector(".slider-selected");
    const next = document.querySelector(".slider-next");
    const last = document.querySelector(".slider-last");
    const add = document.querySelector(".slider-add");
    const first = document.querySelector(".slider-first");

    previous.classList.replace("slider-previous", "slider-selected");
    selected.classList.replace("slider-selected", "slider-next");
    next.classList.replace("slider-next", "slider-last");
    last.classList.replace("slider-last", "slider-add");
    add.classList.replace("slider-add", "slider-first");
    first.classList.replace("slider-first", "slider-previous");
  };

  useEffect(() => {
    const sliderZing = document.querySelectorAll("slider-zing");
    if (!sliderZing) return;
    clearSetIntervalRef.current = setInterval(() => {
      onChangeSliderNext();
    }, 4000);

    return () => {
      clearInterval(clearSetIntervalRef.current);
    };
  });

  const handleClickBanner = (link, id) => {
    let slashI = link.split("/");
    if (slashI[1] === "liveradio") {
      // tạm chưa làm
    }
    if (slashI[1] === "bai-hat") {
      setPlaySong({ ...playSong, id: id });
    }
    if (slashI[1] === "album") {
      navigate(`/album/${id}`);
    }
  };

  return (
    <div className="sliderHomeWraper">
      <div className="inner">
        <div className="sliderHome-slider">
          <div
            className="btn-prev"
            onClick={() => {
              onChangeSliderPrev();
            }}
          >
            <div className="control-prev">
              <i className="icon ic-go-left"></i>
            </div>
          </div>
          {!homeState.isLoading &&
            banner.map((item, index) => {
              let a = "";
              switch (index) {
                case 0:
                  a = "slider-previous";
                  break;
                case 1:
                  a = "slider-selected";
                  break;
                case 2:
                  a = "slider-next";
                  break;
                case 3:
                  a = "slider-last";
                  break;
                case 4:
                  a = "slider-add";
                  break;
                case 5:
                  a = "slider-first";
                  break;
              }

              return (
                <div
                  key={index}
                  className={`slider-zing ${a}`}
                  onClick={() => handleClickBanner(item.link, item.encodeId)}
                >
                  <div className="img-slider">
                    <img src={item["banner"]} />
                  </div>
                </div>
              );
            })}
          <div
            className="btn-next"
            onClick={() => {
              onChangeSliderNext();
            }}
          >
            <div className="control-next">
              <i className="icon ic-go-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
