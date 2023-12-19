import { ADD_NEW_LINK } from "../actions/accountActions";
import { accountStateTypes } from "../context/accountContext";
import { LinkType } from "../types/linksType";

interface AddNewLinkAction {
  type: typeof ADD_NEW_LINK;
  payload: LinkType;
}

export const accountReducer = (
  state: accountStateTypes,
  action: AddNewLinkAction
): accountStateTypes => {
  if (action.type === ADD_NEW_LINK) {
    return { ...state, links: [...state.links, action.payload] };
  }
  return state;
};
