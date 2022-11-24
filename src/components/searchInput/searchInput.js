import React, { useEffect, useRef, useState } from "react";
import SearchResultDefault from "../searchResultDefault";
import { useRecoilState, useSetRecoilState } from "recoil";
import { KeySearch } from "../../appState/keySearch";
import { SearchInputs } from "../../appState/searchInputs";
import { IsOpenResult } from "../../appState/isOpenResult";
import SearchResult from "../searchResult/searchResult";
import "./searchInput.scss";

const SearchInput = () => {
  const setKeySearch = useSetRecoilState(KeySearch);
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
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsOpenResult(true);
    refInput.current.focus();
    ref.current.style.borderBottomLeftRadius = "0";
    ref.current.style.borderBottomRightRadius = "0";
    ref.current.style.backgroundColor = "var(--primary-bg)";
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
        <span>{<i className="icon ic-search size-24px"></i>}</span>
        <input
          ref={refInput}
          type="text"
          placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          onChange={(e) => HandleChangeValue(e)}
          value={value || ""}
        />
      </div>
      {isOpen && (
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
      )}
    </div>
  );
};

export default SearchInput;
