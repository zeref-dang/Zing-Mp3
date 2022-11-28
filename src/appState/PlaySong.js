import { atom } from "recoil";

export const PlaySong = atom({
  key: "PlaySong",
  default: {
    id: "",
    isPlay: false,
    repeat: false,
  },
});
