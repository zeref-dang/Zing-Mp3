import React from "react";
import { useRecoilValue } from "recoil";
import { InfoArtists } from "../../../appState/infoArtists";
import LayoutAlbum from "../../layoutAlbum";
import NotiNoSomething from "../../notiNoSomething";
import "./artistsSingle.scss";

const ArtistsSingle = () => {
  const info = useRecoilValue(InfoArtists);
  const single = info.sections.find((item) => item.title === "Single & EP");

  return (
    <div className="artistsSingleWraper">
      <div className="inner">
        {!single ? <NotiNoSomething /> : <LayoutAlbum column={single.items} />}
      </div>
    </div>
  );
};

export default ArtistsSingle;
