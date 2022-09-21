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

interface IUserData {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface IUserDataStore {
  userData: IUserData;
  setUserData: (userInfo: IUserData) => void;
}

interface ITagStore {
  checkedTags: ITagState[];
  setCheckedTags: (tagState: ITagState[]) => void;
}

const useAuthStore = create<IAuth>((set) => ({
  isLogin: false,
  setIsLogin: (loginState: boolean) => set((state) => ({ ...state, isLogin: loginState })),
}));

const useUserDataStore = create<IUserDataStore>((set) => ({
  userData: { id: '', username: '', email: '', role: '' },
  setUserData: (newUserData: IUserData) => set({ userData: newUserData }),
}));

const useDarkModeStore = create<IDarkMode>((set) => ({
  isDark: false,
  toggleIsDark: () => set((state) => ({ ...state, isDark: !state.isDark })),
  setIsDark: (isDarkState: boolean) => set((state) => ({ ...state, isDark: isDarkState })),
}));

const useCheckedTagStore = create<ITagStore>((set) => ({
  checkedTags: localStorage.getItem(CHECKED_TAGS)
    ? JSON.parse(localStorage.getItem(CHECKED_TAGS)!)
    : [],
  setCheckedTags: (tagState: ITagState[]) => set((state) => ({ ...state, checkedTags: tagState })),
}));

export { useAuthStore, useUserDataStore, useDarkModeStore, useCheckedTagStore };
