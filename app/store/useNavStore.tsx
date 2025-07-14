'use client';
import { create } from 'zustand';

interface NavbarState {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;

  activeIndex: number;
  setActiveIndex: (value: number) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  menuOpen: false,
  setMenuOpen: (value) => set({ menuOpen: value }),

  activeIndex: 0,
  setActiveIndex: (value) => set({ activeIndex: value }),
}));
