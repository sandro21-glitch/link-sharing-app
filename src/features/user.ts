import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserTypes } from "../types/userTypes";

// import type { RootState } from "../store";

export interface UserState {
  userData: {
    userName: string;
    lastName: string;
    email: string;
  };
}
const initialState: UserState = {
  userData: {
    userName: "",
    lastName: "",
    email: "",
  },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDataState: (state, action: PayloadAction<UserTypes>) => {
      const { userData } = state;
      const { data } = action.payload;
      userData.userName = data.userName;
      userData.lastName = data.lastName;
      userData.email = data.email;
    },
  },
});

export const { setUserDataState } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
