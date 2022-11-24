import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import PropTypes from "prop-types";
import { InfoArtists } from "../../appState/infoArtists";
import { ApiTool } from "../../tools/apiTool";
import Popup from "../../components/lib/popup";
import Button from "../../components/lib/button";
import Loading from "../../components/loading";
import ArtistsMenu from "../../components/artistsMenu/artistsMenu";
import "./artists.scss";

const Artists = () => {
  const { id } = useParams();
  const [info, setInfo] = useRecoilState(InfoArtists);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ((info && id !== info.alias) || !info) {
      setLoading(true);
      const params = {
        name: id,
      };
      const api = ApiTool.queryGetFromJson(
        "https://api-zingmp3-public.herokuapp.com/api/artist",
        params,
        (key) => {
          const data = key.data || [];
          setInfo(data);
          setLoading(false);
        }
      );
      return () => {
        api.abort();
      };
    }
  }, [id]);

  return (
    <div className="artists-wraper">
      {loading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {!loading && info && (
        <>
          <div className="inner">
            <div className="infor">
              <h1 className="name">{info.name}</h1>
              <div className="describe">{info.sortBiography}</div>
              <div className="btn-more">
                <Popup small renderMain={<button>... XEM THÊM</button>}>
                  <div className="descrip-ar">
                    <div className="header">
                      <div className="img">
                        <img src={info.thumbnailM} />
                      </div>
                      <div className="title">
                        <h2>{info.name}</h2>
                      </div>
                      <div className="main">
                        <div>
                          {info.biography
                            .replace(/<br>/g, "")
                            .split("\n")
                            .map((item, i) => (
                              <p key={i}>{item}</p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>
              <div className="btn">
                <Button
                  White
                  primary
                  leftIcon={<i className="icon ic-play sizw-16px"></i>}
                >
                  <div className="btn-color">PHÁT NHẠC</div>
                </Button>
                <Button White primary>
                  <div className="btn-color">
                    QUAN TÂM • {Math.floor(info.totalFollow / 1000) + "k"}
                  </div>
                </Button>
              </div>
              <div className="awards">
                <div className="img-awards">
                  <img src="/resources/assets/img/imgartists/awards.svg" />
                </div>

                <div className="sub-awards">
                  {info.awards &&
                    info.awards.map((item, index) => <p key={index}>{item}</p>)}
                  {!info.awards && <p></p>}
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="right">
                <img src={info.thumbnailM} />
              </div>
            </div>
          </div>
          <ArtistsMenu />
        </>
      )}
    </div>
  );
};

export default Artists;
