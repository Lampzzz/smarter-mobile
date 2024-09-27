import { create } from "zustand";

import { register } from "@/firebase/auth";
import { ErrorHandler } from "@/lib/utils";

interface UserStore {
  user: User;
  loading: boolean;
  setUser: (data: Partial<User>) => void;
  addUser: () => Promise<void>;
  setLoading: (loading: boolean) => void;
}

export const useUserFormStore = create<UserStore>((set, get) => ({
  loading: false,
  user: {
    contactInfo: "",
    password: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthdate: "",
    address: "",
    gender: "",
    photo: "",
  },

  setLoading: (loading: boolean) => {
    set({ loading });
  },

  setUser: (data: Partial<User>) => {
    set((state) => ({
      user: {
        ...state.user,
        ...data,
      },
    }));
  },

  addUser: async () => {
    try {
      get().setLoading(true);

      const { user } = get();
      await register(user);
    } catch (error: unknown) {
      ErrorHandler(error);
    } finally {
      get().setLoading(false);
    }
  },
}));
