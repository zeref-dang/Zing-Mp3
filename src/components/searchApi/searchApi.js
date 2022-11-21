import React, { useEffect, useState } from "react";
import { ApiTool } from "../../tools";
import { KeySearch } from "../../appState/keySearch";
import { SearchInputs } from "../../appState/searchInputs";
import { useRecoilValue, useSetRecoilState } from "recoil";

import PropTypes from "prop-types";

const SearchApi = () => {
  const keyValue = useRecoilValue(KeySearch);
  const setSearchInputs = useSetRecoilState(SearchInputs);
  const [value, setValue] = useState({});

  useEffect(() => {
    const data = {
      keyword: keyValue,
    };
    const ApiSearch = ApiTool.queryGetFromJson(
      "https://api-zingmp3-public.herokuapp.com/api/search",
      data,
      (key) => {
        if (key.msg === "Success") {
          setValue(key.data);
          // Search input
          const searchInput = [];
          if (key.data.counter.song === 0 && key.data.counter.artist === 0) {
            return null;
          } else if (key.data.top && key.data.top.name) {
            searchInput.push(key.data.top);
            searchInput.push(key.data.artists[1]);
            searchInput.push(key.data.artists[2]);
            searchInput.push(key.data.songs[0]);
            searchInput.push(key.data.songs[1]);
            searchInput.push(key.data.songs[2]);
          } else {
            searchInput.push(key.data.artists[0]);
            searchInput.push(key.data.top);
            searchInput.push(key.data.artists[1]);
            searchInput.push(key.data.artists[2]);
            searchInput.push(key.data.songs[0]);
            searchInput.push(key.data.songs[1]);
          }

          setSearchInputs(searchInput);
        }
      }
    );
    return () => ApiSearch.abort();
  }, [keyValue]);

  return <></>;
};

SearchApi.propTypes = {
  //
};

export default SearchApi;
