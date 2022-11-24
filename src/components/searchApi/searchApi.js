import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ApiTool } from "../../tools";
import { KeySearch } from "../../appState/keySearch";
import { SearchInputs } from "../../appState/searchInputs";

const SearchApi = () => {
  const keyValue = useRecoilValue(KeySearch);
  const setSearchInputs = useSetRecoilState(SearchInputs);

  useEffect(() => {
    const data = {
      keyword: keyValue,
    };
    const ApiSearch = ApiTool.queryGetFromJson(
      "https://api-zingmp3-public.herokuapp.com/api/search",
      data,
      (key) => {
        if (key.msg === "Success") {
          const searchInput = [];
          if (key.data.counter.song === 0 && key.data.counter.artist === 0) {
            return null;
          } else if (key.data.top && key.data.top.name) {
            let a;
            key.data.artists.map((item, index) => {
              if (key.data.top.name === item.name) {
                a = index;
              }
            });
            searchInput.push(key.data.artists[a]);
            searchInput.push(key.data.artists[1]);
            searchInput.push(key.data.artists[2]);
            searchInput.push(key.data.songs[0]);
            searchInput.push(key.data.songs[1]);
            searchInput.push(key.data.songs[2]);
          } else if (key.data.counter.artist === 0) {
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

export default SearchApi;
