import create from 'zustand';
import { ITagState } from '../types/tag';

interface ICheckedTags {
  checkedTags: Set<ITagState>;
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
  checkedTags: new Set<ITagState>(),
  handleCheckedTags: (id: string, isChecked: boolean) =>
    set((state: ICheckedTags) => ({
      checkedTags: new Set([
        ...[...state.checkedTags].filter((tag) => tag.id !== id),
        { id: id, isChecked: isChecked },
      ]),
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
