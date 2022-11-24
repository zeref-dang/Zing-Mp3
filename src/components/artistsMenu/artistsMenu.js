import React from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet, useLocation } from "react-router-dom";
import { urlArtists } from "../../config/urlArtists";
import "./artistsMenu.scss";

const ArtistsMenu = () => {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div className="artistsMenuWraper">
      <div className="inner">
        <div className="navbarMenu">
          <ul className="navLink">
            {urlArtists.map((item) => {
              if (location.pathname === item.path.replace(":id", id)) {
                return (
                  <li key={item.id} className="navItem active">
                    <Link to={item.path.replace(":id", id)}>{item.name}</Link>
                  </li>
                );
              }
              return (
                <li key={item.id} className="navItem">
                  <Link to={item.path.replace(":id", id)}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mainInfo">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ArtistsMenu;
