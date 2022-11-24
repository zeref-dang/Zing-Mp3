import React from "react";
import { useRecoilValue } from "recoil";
import { InfoArtists } from "../../../appState/infoArtists";
import ArtistsAllSongI from "./artistsAllSongI/artistsAllSongI";
import LayoutAlbum from "../../layoutAlbum";
import "./artistsAll.scss";

const ArtistsAll = () => {
  const info = useRecoilValue(InfoArtists);

  const single = info.sections.find((item) => item.title === "Single & EP");
  const single5 = single ? single.items.slice(0, 5) : [];

  const album = info.sections.find((item) => item.title === "Album");
  const album5 = album ? album.items.slice(0, 5) : [];

  const mv = info.sections.find((item) => item.title === "MV");
  const mv5 = mv ? mv.items.slice(0, 5) : [];

  return (
    <div className="artistsAllWraper">
      <div className="inner">
        <div className="sections">
          <div className="songI">
            <ArtistsAllSongI />
          </div>
          <div className="single">
            {single ? <LayoutAlbum title="Single & EP" column={single5} /> : ""}
          </div>
          <div className="album">
            {album ? <LayoutAlbum title="Album" column={album5} /> : ""}
          </div>
          <div className="MV">
            {mv ? <LayoutAlbum mv title="MV" column={mv5} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsAll;
