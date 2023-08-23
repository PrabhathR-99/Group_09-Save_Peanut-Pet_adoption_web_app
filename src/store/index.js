import { create } from "zustand";

export const useStore = create((set) => ({
    authenticated: true,
    setAuthenticated: (value) => set({ authenticated: value }),
    pets: [],
    setPets: (value) => set({ pets: value }),
}));