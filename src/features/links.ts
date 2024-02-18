import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../store";
import { LinkTypes } from "../types/linksType";
import GitLabLogo from "/assets/images/icon-gitlab.svg";
import GitLabLogoWhite from "/assets/images/icon-gitlab-link-box.svg";
interface LinksState {
  links: LinkTypes[];
}

const initialState: LinksState = {
  links: [
    {
      id: 1,
      name: "GitHub",
      placeholderUrl: "https://www.github.com/johnappleseed",
      logo: GitLabLogo,
      logoWhite: GitLabLogoWhite,
      color: "hsl(0, 0%, 1.5686274509803921%)",
      validation: /(https:\/\/)?(www\.)?github\.com\/[\w\-\/]*/,
    },
  ],
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {},
});

export const {} = linksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default linksSlice.reducer;
