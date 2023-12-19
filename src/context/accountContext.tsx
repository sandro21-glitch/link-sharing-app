import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { accountReducer } from "../reducers/accountReducer";
export interface accountStateTypes {
  links: {
    name: string;
    placeholderUrl: string;
    logo: string;
    color: string;
    validation: RegExp;
  }[];
}
interface AccountContextValue {
  state: accountStateTypes;
  dispatch: Dispatch<any>;
}
const initialState: accountStateTypes = {
  links: [],
};
interface AccountContextProviderProps {
  children: ReactNode;
}

const accountContextProvider = createContext<AccountContextValue | null>(null);

const accountContext = ({ children }: AccountContextProviderProps) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  return (
    <accountContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </accountContextProvider.Provider>
  );
};

export default accountContext;
