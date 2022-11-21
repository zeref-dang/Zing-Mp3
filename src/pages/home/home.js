import React from "react";
import PropTypes from "prop-types";
import Loading from "../../components/loading";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-wraper">
      <Loading />
    </div>
  );
};

Home.propTypes = {
  //
};

export default Home;
