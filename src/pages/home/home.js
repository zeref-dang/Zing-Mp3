import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SliderHome from "../../components/sliderHome";
import Loading from "../../components/loading";
import { ApiTool } from "../../tools/apiTool";
import { HomeState } from "../../appState/homeState";
import { useRecoilState } from "recoil";
import "./home.scss";

const Home = () => {
  const [homeState, setHomeState] = useRecoilState(HomeState);
  useEffect(() => {
    setHomeState({ ...homeState, isLoading: true });
    const api = ApiTool.get(
      "https://api-zingmp3-public.herokuapp.com/api/home",
      (key) => {
        if (key.msg === "Success") {
          setHomeState({
            ...homeState,
            data: key.data.items,
            isLoading: false,
          });
        }
        return () => {
          api.abort();
        };
      }
    );
  }, []);

  console.log(homeState.data);

  if (homeState.isLoading) {
    return (
      <div className="homeLoading">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="home-wraper">
        <SliderHome />
      </div>
    );
  }
};

Home.propTypes = {
  //
};

export default Home;
