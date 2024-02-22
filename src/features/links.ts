import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import type { RootState } from "../store";
import { LinkTypes, SingleLinkType } from "../types/linksType";
const storedLinks = localStorage.getItem("links");

interface LinksState {
  links: LinkTypes[];
}

const initialState: LinksState = {
  links: storedLinks ? JSON.parse(storedLinks) : [],
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addNewLink: (state, action: PayloadAction<SingleLinkType>) => {
      if (state.links.length < 5) {
        const newLink = {
          id: uuidv4(),
          path: "",
          ...action.payload,
        };
        state.links.push(newLink);
      }
    },
    editLink: (
      state,
      action: PayloadAction<{ id: string; link: SingleLinkType }>
    ) => {
      const { id, link } = action.payload;
      const selectedLink = state.links.find((link) => link.id === id);
      if (selectedLink) {
        selectedLink.validation = link.validation;
        selectedLink.color = link.color;
        selectedLink.logo = link.logo;
        selectedLink.logoWhite = link.logoWhite;
        selectedLink.placeholderUrl = link.placeholderUrl;
        selectedLink.name = link.name;
        selectedLink.path = "";
      }
    },
    removeLink: (state, action: PayloadAction<string>) => {
      state.links = state.links.filter((link) => link.id !== action.payload);
    },
    addLinkPath: (
      state,
      action: PayloadAction<{ id: string; linkPath: string }>
    ) => {
      const { id, linkPath } = action.payload;
      const link = state.links.find((link) => link.id === id);
      if (link) {
        link.path = linkPath;
      }
    },
  },
});

export const { addNewLink, editLink, removeLink, addLinkPath } =
  linksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default linksSlice.reducer;
