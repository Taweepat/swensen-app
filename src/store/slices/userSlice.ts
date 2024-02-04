import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  localeCompare(b: IUserState): number;
  id: number;
  noun: "นาย" | "นาง" | "นางสาว" | "เด็กชาย" | "เด็กหญิง" | undefined;
  firstName: string;
  lastName: string;
  birthDate: Date;
  nation: string;
  cardId: string;
  gender: string;
  tel: string;
  travelBookNo: string;
  salary: string;
}

const initialState: IUserState[] = [];

function getUsersFromLocalStorage(): IUserState[] {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : initialState;
}

export const userSlice = createSlice({
  name: "user",
  initialState: getUsersFromLocalStorage(),
  reducers: {
    addUser(state, action) {
      const nextId = state.length > 0 ? state[state.length - 1].id + 1 : 1;

      const newUser = {
        id: nextId,
        ...action.payload,
      };

      state.push(newUser);

      localStorage.setItem("users", JSON.stringify(state));
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      const updatedUsers = state.filter((user) => user.id !== userIdToDelete);
      state.splice(0, state.length, ...updatedUsers);
      localStorage.setItem("users", JSON.stringify(state));
    },
    editUser: (state, action) => {
      const editedUser = action.payload;
      const index = state.findIndex((user) => user.id === editedUser.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...editedUser };
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    clearUser: () => {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const { addUser, clearUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
