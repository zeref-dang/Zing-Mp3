import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { urlArtists } from "../../config/urlArtists";
import "./layoutAlbum.scss";

const LayoutAlbum = (props) => {
  const { title, column = [], mv = false } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="layoutAlbumWraper">
      <div className="inner">
        {title && (
          <div className="header">
            <h2>{title}</h2>
            {urlArtists.map((item, index) => {
              if (title === item.title) {
                return (
                  <Link
                    key={index}
                    to={item.path.replace(":id", id) || item.path}
                  >
                    Tất cả <i className="icon ic-go-right size-16px"></i>
                  </Link>
                );
              }
            })}
          </div>
        )}
        <div className="grid">
          <div className="row">
            {column &&
              column.map((item) => {
                return (
                  <div
                    key={item.encodeId}
                    className="columnLayoutAlbum"
                    onClick={() => {
                      navigate(`/album/${item.encodeId}`);
                    }}
                  >
                    <Link>
                      <div className="card">
                        <div className={`img ${mv ? "mv-img" : ""}`}>
                          <img src={item.thumbnailM} />
                          <div className="imgDark">
                            <img src="./resources/assets/img/imgAlbum/play.svg" />
                          </div>
                          {item.duration ? (
                            <div className="imgTime">
                              <p>
                                {Math.floor(item.duration / 60) +
                                  ":" +
                                  (item.duration -
                                    Math.floor(item.duration / 60) * 60)}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="title">
                          <h4>{item.title}</h4>
                        </div>
                        <div className="subTitle">{item.releaseDateText}</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

LayoutAlbum.propTypes = {
  title: PropTypes.string,
  column: PropTypes.array,
  mv: PropTypes.bool,
};

export default LayoutAlbum;
