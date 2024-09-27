import { create } from "zustand";

interface User {
  email: string;
  contactNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthdate: string;
}

export const useStore = create((set) => ({
  user: {
    contactInfo: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthdate: "",
  },

  setUser: (user: User) => set({ user }),
}));
