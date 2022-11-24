import React from "react";
import { useRecoilValue } from "recoil";
import { InfoArtists } from "../../../appState/infoArtists";
import LayoutAlbum from "../../layoutAlbum";
import NotiNoSomething from "../../notiNoSomething";
import "./artistsAlbum.scss";

const ArtistsAlbum = () => {
  const info = useRecoilValue(InfoArtists);
  const album = info.sections.find((item) => item.title === "Album");
  return (
    <div className="artistsAlbumWraper">
      <div className="inner">
        {!album ? <NotiNoSomething /> : <LayoutAlbum column={album.items} />}
      </div>
    </div>
  );
};

export default ArtistsAlbum;
