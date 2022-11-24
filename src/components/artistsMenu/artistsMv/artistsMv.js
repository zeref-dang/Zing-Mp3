import React from "react";
import { useRecoilValue } from "recoil";
import { InfoArtists } from "../../../appState/infoArtists";
import LayoutAlbum from "../../layoutAlbum";
import NotiNoSomething from "../../notiNoSomething";
import "./artistsMv.scss";

const ArtistsMv = () => {
  const info = useRecoilValue(InfoArtists);
  const mv = info.sections.find((item) => item.title === "MV");

  return (
    <div className="artistsMvWraper">
      <div className="inner">
        {!mv ? <NotiNoSomething /> : <LayoutAlbum mv column={mv.items} />}
      </div>
    </div>
  );
};

export default ArtistsMv;
