import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import type { RootState } from "../store";
import { LinkTypes, SingleLinkType } from "../types/linksType";

interface LinksState {
  links: LinkTypes[];
}

const initialState: LinksState = {
  links: [],
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addNewLink: (state, action: PayloadAction<SingleLinkType>) => {
      const newLink = {
        id: uuidv4(),
        ...action.payload,
      };
      state.links.push(newLink);
    },
  },
});

export const { addNewLink } = linksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default linksSlice.reducer;
