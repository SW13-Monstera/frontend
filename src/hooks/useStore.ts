import create from 'zustand';
import { ITagState } from '../types/tag';

interface ICheckedTags {
  checkedTags: ITagState[];
  handleCheckedTags: (id: string, isChecked: boolean) => void;
}

interface IAuth {
  isLogin: boolean;
  setIsLogin: (loginState: boolean) => void;
}

interface IUserInfo {
  id: string;
  username: string;
  email: string;
  role: string;
}

interface IUserInfoStore {
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
}

const useCheckedTagsStore = create<ICheckedTags>((set) => ({
  checkedTags: [],
  handleCheckedTags: (id: string, isChecked: boolean) =>
    set((state) => ({
      ...state,
      checkedTags: state.checkedTags.map((tag) => tag.id).includes(id)
        ? state.checkedTags.map((tag) => (tag.id === id ? { id, isChecked } : tag))
        : [...state.checkedTags, { id, isChecked }],
    })),
}));

const useAuthStore = create<IAuth>((set) => ({
  isLogin: false,
  setIsLogin: (loginState: boolean) => set((state) => ({ ...state, isLogin: loginState })),
}));

const useUserInfoStore = create<IUserInfoStore>((set) => ({
  userInfo: { id: '', username: '', email: '', role: '' },
  setUserInfo: (newUserInfo: IUserInfo) => set({ userInfo: newUserInfo }),
}));

export { useCheckedTagsStore, useAuthStore, useUserInfoStore };
