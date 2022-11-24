import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { SearchInputs } from "../../appState/searchInputs";
import { IsOpenResult } from "../../appState/isOpenResult";
import Loading from "../loading";
import "./searchResult.scss";

const SearchResult = (props) => {
  const { handleSelected } = props;

  const searchInputs = useRecoilValue(SearchInputs);
  const setIsOpenResult = useSetRecoilState(IsOpenResult);
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
                          nghệ sĩ - {Math.floor(item.totalFollow / 1000) + "k "}
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
                        <img src={item.thumbnailM} />
                        <div className="music-before">
                          <div>
                            {
                              <i className="icon ic-play size-16px icon-white"></i>
                            }
                          </div>
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
export default SearchResult;
