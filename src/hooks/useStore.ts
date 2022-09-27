import { CHECKED_TAGS } from './../constants/localStorage';
import create from 'zustand';
import { ITagState } from '../types/tag';

interface IAuth {
  isLogin: boolean;
  setIsLogin: (loginState: boolean) => void;
}

interface IDarkMode {
  isDark: boolean;
  toggleIsDark: () => void;
  setIsDark: (isDarkState: boolean) => void;
}

interface ITagStore {
  checkedTags: ITagState[];
  setCheckedTags: (tagState: ITagState[]) => void;
}

const useAuthStore = create<IAuth>((set) => ({
  isLogin: false,
  setIsLogin: (loginState: boolean) => set((state) => ({ ...state, isLogin: loginState })),
}));

const useDarkModeStore = create<IDarkMode>((set) => ({
  isDark: false,
  toggleIsDark: () => set((state) => ({ ...state, isDark: !state.isDark })),
  setIsDark: (isDarkState: boolean) => set((state) => ({ ...state, isDark: isDarkState })),
}));

const useCheckedTagStore = create<ITagStore>((set) => ({
  checkedTags: sessionStorage.getItem(CHECKED_TAGS)
    ? JSON.parse(sessionStorage.getItem(CHECKED_TAGS)!)
    : [],
  setCheckedTags: (tagState: ITagState[]) => set((state) => ({ ...state, checkedTags: tagState })),
}));

export { useAuthStore, useDarkModeStore, useCheckedTagStore };
