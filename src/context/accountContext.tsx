import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { accountReducer } from "../reducers/accountReducer";
import { ADD_NEW_LINK, SELECT_LINK } from "../actions/accountActions";
import { LinkType } from "../types/linksType";

export interface accountStateTypes {
  links: {
    id: number;
    name: string;
    placeholderUrl: string;
    logo: string;
    logoWhite: string;
    color: string;
    validation: RegExp;
  }[];
  selectedLink?: LinkType | null;
}
interface AccountContextValue {
  state: accountStateTypes;
  dispatch: Dispatch<any>;
  addNewLink: (newLink: LinkType) => void;
  selectLink: (link: LinkType) => void;
}
const initialState: accountStateTypes = {
  links: [],
  selectedLink: null,
};
interface AccountContextProviderProps {
  children: ReactNode;
}

const accountContextProvider = createContext<AccountContextValue | null>(null);

const AccountContext = ({ children }: AccountContextProviderProps) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const addNewLink = (newLink: LinkType) => {
    dispatch({ type: ADD_NEW_LINK, payload: newLink });
  };
  const selectLink = (link: LinkType) => {
    dispatch({ type: SELECT_LINK, payload: link });
  };
  return (
    <accountContextProvider.Provider
      value={{ state, dispatch, addNewLink, selectLink }}
    >
      {children}
    </accountContextProvider.Provider>
  );
};

export const useAccountContext = () => {
  const context = useContext(accountContextProvider);
  if (!context) {
    throw new Error(
      "useAccountContext must be used within a accountContextProvider"
    );
  }
  return context;
};

export default AccountContext;
