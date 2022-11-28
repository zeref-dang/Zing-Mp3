import { atom } from "recoil";

const controlPlayer = JSON.parse(localStorage.getItem("ControlPlayer"));

export const Screen = atom({
  key: "Screen",
  default: controlPlayer ? true : false,
});
