import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import * as ReactDOM from "react-dom";
import SearchResultDefault from "../searchResultDefault";
import { useRecoilState, useSetRecoilState } from "recoil";
import { KeySearch } from "../../appState/keySearch";
import { SearchInputs } from "../../appState/searchInputs";
import { IsOpenResult } from "../../appState/isOpenResult";

import "./searchInput.scss";
import SearchResult from "../searchResult/searchResult";

const SEARCH = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px">
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
  </svg>
);

const SearchInput = (props) => {
  const [keySearch, setKeySearch] = useRecoilState(KeySearch);
  const searchInputs = useSetRecoilState(SearchInputs);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenResult, setIsOpenResult] = useRecoilState(IsOpenResult);

  const [topResult, setTopResult] = useState(0);
  const [leftResult, setleftResult] = useState(0);
  const [widthResult, setWidthResult] = useState(0);

  const ref = useRef();
  const refInput = useRef();
  const refList = useRef();

  //////////////////////////////////////////////////////////////
  // dành cho sử lí input value
  const [value, setValue] = useState("");
  //////////////////////////////////////////////////////////////

  const handleScrollAndResize = () => {
    const cpn = ref.current.getBoundingClientRect() || {};
    const topResulty = cpn.top + cpn.height;
    const leftResultx = cpn.left;
    setTopResult(topResulty);
    setWidthResult(cpn.width);
    setleftResult(leftResultx);
  };

  useEffect(() => {
    handleScrollAndResize();
    window.addEventListener("resize", handleScrollAndResize, true);
    document.addEventListener("scroll", handleScrollAndResize, true);

    return () => {
      window.removeEventListener("resize", handleScrollAndResize, true);
      document.removeEventListener("scroll", handleScrollAndResize, true);
    };
  });

  useEffect(() => {
    const handleClose = (event) => {
      if (isOpen) {
        var isClickInsideElementListRef = refList.current.contains(
          event.target
        );
        if (!isClickInsideElementListRef) {
          setIsOpen(false);
          focusInput();
          ref.current.style.backgroundColor = "var(--alpha-bg)";
        }
      }
    };
    window.addEventListener("mousedown", handleClose);
    return () => window.removeEventListener("mousedown", handleClose);
  }, [isOpen]);

  const focusInput = () => {
    ref.current.style.borderBottomLeftRadius = "20px";
    ref.current.style.borderBottomRightRadius = "20px";
    ref.current.style.boxShadow = "0px 0px 0px 0 rgba(0, 0, 0, 0.2)";
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsOpenResult(true);
    refInput.current.focus();
    ref.current.style.borderBottomLeftRadius = "0";
    ref.current.style.borderBottomRightRadius = "0";
    ref.current.style.backgroundColor = "#fff";
    ref.current.style.boxShadow =
      "0px -1px 2px 0 rgba(0, 0, 0, 0.2), 1px 0px 2px 0 rgba(0, 0, 0, 0.2),-1px 0px 2px 0 rgba(0, 0, 0, 0.2)";
  };

  const handleSelected = () => {
    focusInput();
    ref.current.style.backgroundColor = "var(--alpha-bg)";
  };
  //////////////////////////////////////////////////////////////////////
  //HANDLE của INPUT

  const HandleChangeValue = (e) => {
    setValue(e.target.value);
    if (e.target.value) {
      setTimeout(() => {
        setKeySearch(e.target.value);
      }, 300);
    } else {
      setKeySearch(null);
      searchInputs(null);
    }
  };
  //////////////////////////////////////////////////////////////////////
  return (
    <div className="searchinput-wraper">
      <div className="input" ref={ref} onClick={handleOpen}>
        <span>{SEARCH}</span>
        <input
          ref={refInput}
          type="text"
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          onChange={(e) => HandleChangeValue(e)}
          value={value || ""}
        />
      </div>
      {ReactDOM.createPortal(
        isOpen && (
          <div
            ref={refList}
            className="result-search-input"
            style={{
              width: widthResult,
              top: topResult,
              left: leftResult,
            }}
          >
            {value && isOpenResult && (
              <SearchResult handleSelected={handleSelected} />
            )}
            <SearchResultDefault
              handleSelected={handleSelected}
              setValue={setValue}
              setIsOpenResult={setIsOpenResult}
              value={value}
              isOpenResult={isOpenResult}
            />
          </div>
        ),
        document.body
      )}
    </div>
  );
};

SearchInput.propTypes = {
  //
};

export default SearchInput;
