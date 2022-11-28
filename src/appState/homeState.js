import { atom } from "recoil";

export const HomeState = atom({
  key: "HomeState",
  default: {
    data: null,
    isLoading: true,
  },
});
