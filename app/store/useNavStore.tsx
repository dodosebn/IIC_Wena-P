'use client';
import { create } from 'zustand';
import { NavbarState } from '../types';


export const useNavbarStore = create<NavbarState>((set) => ({
  menuOpen: false,
  setMenuOpen: (value) => set({ menuOpen: value }),

  activeIndex: 0,
  setActiveIndex: (value) => set({ activeIndex: value }),
}));
