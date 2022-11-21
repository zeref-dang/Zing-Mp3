import React from "react";
import "./searchResultDefault.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { KeySearch } from "../../appState/keySearch";

const ARROW = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="15px">
    <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
  </svg>
);

const suggestionsResult = {
  sugg: ["Sao cũng được", "Quên hay", "Karaoke"],
  route: [
    { title: "XONE Radio", path: "/radio" },
    { title: "Postcast", path: "/radio" },
    { title: "#Zingchart", path: "/zingchart" },
  ],
};

const SearchResultDefault = (props) => {
  const { handleSelected, setValue, setIsOpenResult, value, isOpenResult } =
    props;

  const navigate = useNavigate();

  const setKeySearch = useSetRecoilState(KeySearch);

  const handleClickLink = () => {
    handleSelected();
    setIsOpenResult(false);
  };

  const handleClickSearch = (key) => {
    setKeySearch(key);
    handleSelected();
    setValue(key);
    setIsOpenResult(false);
    navigate("/search");
  };

  return (
    !value &&
    isOpenResult && (
      <div className="searchresultdefault-wraper">
        <div className="inner">
          <h4>Đề xuất cho bạn</h4>
          {Object.keys(suggestionsResult).map((items, index) => {
            return suggestionsResult[items].map((item, index) => {
              if (typeof item === "string") {
                return (
                  <div
                    key={index}
                    className="result"
                    onClick={() => handleClickSearch(item)}
                  >
                    <span>{ARROW}</span>
                    {item}
                  </div>
                );
              }
              if (typeof item === "object") {
                return (
                  <div
                    key={index}
                    className="result"
                    onClick={() => handleClickLink()}
                  >
                    <Link to={item.path}>
                      <span>{ARROW}</span>
                      {item.title}
                    </Link>
                  </div>
                );
              }
            });
          })}
        </div>
      </div>
    )
  );
};

SearchResultDefault.propTypes = {
  //
};

export default SearchResultDefault;
