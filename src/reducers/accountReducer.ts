import { ADD_NEW_LINK, SELECT_LINK } from "../actions/accountActions";
import { accountStateTypes } from "../context/AccountContext";
import { LinkType } from "../types/linksType";

type AddNewLinkAction =
  | {
      type: typeof ADD_NEW_LINK;
      payload: LinkType;
    }
  | {
      type: typeof SELECT_LINK;
      payload: LinkType;
    };

export const accountReducer = (
  state: accountStateTypes,
  action: AddNewLinkAction
): accountStateTypes => {
  if (action.type === ADD_NEW_LINK) {
    console.log(action.payload);
    return { ...state, links: [...state.links, action.payload] };
  }
  if (action.type === SELECT_LINK) {
    const selectedItem = action.payload;
    console.log(action.payload);

    return { ...state, selectedLink: selectedItem };
  }
  return state;
};
