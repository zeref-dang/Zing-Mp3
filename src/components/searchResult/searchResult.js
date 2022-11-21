import React from "react";
import PropTypes from "prop-types";
import { useRecoilState, useRecoilValue } from "recoil";
import { SearchInputs } from "../../appState/searchInputs";
import "./searchResult.scss";
import { Link, useNavigate } from "react-router-dom";
import { IsOpenResult } from "../../appState/isOpenResult";
import Loading from "../loading";
import { StringTool } from "../../tools/stringTool";

const PLAY = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
  </svg>
);

const SearchResult = (props) => {
  const { handleSelected } = props;

  const searchInputs = useRecoilValue(SearchInputs);
  const [isOpenResult, setIsOpenResult] = useRecoilState(IsOpenResult);
  const navigate = useNavigate();

  const handleCloseResult = (item) => {
    setIsOpenResult(false);
    handleSelected();
    navigate(`/artists/${item}`);
  };

  return (
    <div className="search-result">
      {!searchInputs && (
        <div className="search-loading">
          <Loading />
        </div>
      )}
      {searchInputs && (
        <div>
          <h4>Từ khóa liên quan</h4>
          {searchInputs &&
            searchInputs.map((item, index) => {
              if (item) {
                if (item.name) {
                  return (
                    <div
                      key={index}
                      className="singer"
                      onClick={() => handleCloseResult(item.alias)}
                    >
                      <div className="singer-avatar">
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div className="singer-right">
                        <div className="singer-name">{item.name}</div>
                        <div className="singer-desc">
                          nghệ sĩ - {Math.floor(item.totalFollow / 1000) + "k"}
                          quan tâm
                        </div>
                      </div>
                    </div>
                  );
                }
                if (item.title) {
                  return (
                    <div
                      key={index}
                      className="music"
                      // onClick={() => handleCloseResult()}
                    >
                      <div className="music-avatar">
                        <img src={item.thumbnail} />
                        <div className="music-before">
                          <div>{PLAY}</div>
                        </div>
                      </div>
                      <div className="music-left">
                        <div className="music-name">{item.title}</div>
                        <div className="music-desc">{item.artistsNames}</div>
                      </div>
                    </div>
                  );
                }
              }
            })}
        </div>
      )}
    </div>
  );
};

SearchResult.propTypes = {
  //
};

export default SearchResult;
