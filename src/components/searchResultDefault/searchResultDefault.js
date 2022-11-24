import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { KeySearch } from "../../appState/keySearch";
import "./searchResultDefault.scss";

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
                    <span>
                      <i className="icon ic-trend size-16px"></i>
                    </span>
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
                      <span>
                        <i className="icon ic-trend size-16px"></i>
                      </span>
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

export default SearchResultDefault;
