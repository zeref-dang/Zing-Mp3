import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { HomeState } from "../../appState/homeState";

const NewReleaseHome = () => {
  const [homeState, setHomeState] = useRecoilState(HomeState) || [];
  const newRelease = homeState.data.find(
    (item) => item.sectionType === "new-release"
  );

  const newReleaseAll = newRelease.items.all.slice(0, 12);
  const newReleasevPop = newRelease.items.vPop.slice(0, 12);
  const newReleaseOthers = newRelease.items.others.slice(0, 12);

  console.log(newReleaseAll);
  console.log(newReleasevPop);
  console.log(newReleaseOthers);
  return (
    <div className="newReleaseHome">
      <div className="inner">hello</div>
    </div>
  );
};

NewReleaseHome.propTypes = {
  //
};

export default NewReleaseHome;
