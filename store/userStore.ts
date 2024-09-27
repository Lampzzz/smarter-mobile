import { create } from "zustand";

interface User {
  contactInfo: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthdate: string;
  address: string;
  gender: string;
}

interface UserStore {
  user: User;
  setUser: (data: Partial<User>) => void;
}

export const useUserFormStore = create<UserStore>((set) => ({
  user: {
    contactInfo: "",
    password: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthdate: "",
    address: "",
    gender: "",
  },

  setUser: (data: Partial<User>) => {
    set((state) => ({
      user: {
        ...state.user,
        ...data,
      },
    }));
  },
}));
