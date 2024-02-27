import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserTypes } from "../types/userTypes";

// import type { RootState } from "../store";
const storedUserData = localStorage.getItem("userData");
const initialUserData = storedUserData ? JSON.parse(storedUserData) : {};
const storedUserImage = localStorage.getItem("userImage");
const initialUserImage = storedUserImage || "";
export interface UserState {
  userData: {
    userName: string;
    lastName: string;
    email: string;
  };
  image: string;
}
const initialState: UserState = {
  userData: {
    userName: initialUserData.userName || "",
    lastName: initialUserData.lastName || "",
    email: initialUserData.email || "",
  },
  image: initialUserImage || "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDataState: (state, action: PayloadAction<UserTypes>) => {
      const { userData, image } = state;
      const { data } = action.payload;
      userData.userName = data.userName;
      userData.lastName = data.lastName;
      userData.email = data.email;
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("userImage", image);
    },
    setUserImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { setUserDataState, setUserImage } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
