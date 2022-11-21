import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./artists.scss";
import { useParams } from "react-router-dom";
import Popup from "../../components/lib/popup";
import Button from "../../components/lib/button";
import { ApiTool } from "../../tools/apiTool";
import Loading from "../../components/loading";

const PLAY = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16px">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
  </svg>
);

const Artists = () => {
  const { id } = useParams();
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const params = {
      name: id,
    };
    const api = ApiTool.queryGetFromJson(
      "https://api-zingmp3-public.herokuapp.com/api/artist",
      params,
      (key) => {
        const data = key.data;
        setInfo(data);
        setLoading(false);
        console.log(data);
      }
    );
    return () => {
      api.abort();
    };
  }, [id]);

  return (
    <div className="artists-wraper">
      {loading && <Loading />}
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
                        <img src={info.thumbnail} />
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
                <Button primary leftIcon={PLAY}>
                  <div className="btn-color">PHÁT NHẠC</div>
                </Button>
                <Button primary>
                  <div className="btn-color">
                    QUAN TÂM • {Math.floor(info.totalFollow / 1000) + "k"}
                  </div>
                </Button>
              </div>
              <div className="awards">
                <div className="img-awards">
                  <img src="/resources/assets/image/awards.svg" />
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
                <img src={info.thumbnail} />
              </div>
            </div>
          </div>
          <div className="cover">
            <div>
              <img src={info.cover} alt={info.name} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Artists.propTypes = {
  //
};

export default Artists;
