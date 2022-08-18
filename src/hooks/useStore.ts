import create from 'zustand';
import { ITagState } from '../types/tag';

interface ICheckedTags {
  checkedTags: ITagState[];
  handleCheckedTags: (id: string, isChecked: boolean) => void;
  resetCheckedTags: (resetCheckboxes: () => void) => void;
}

interface IAuth {
  isLogin: boolean;
  setIsLogin: (loginState: boolean) => void;
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

const useCheckedTagsStore = create<ICheckedTags>((set) => ({
  checkedTags: [],
  handleCheckedTags: (id: string, isChecked: boolean) => {
    set((state) => ({
      ...state,
      checkedTags: state.checkedTags.map((tag) => tag.id).includes(id)
        ? state.checkedTags.map((tag) => (tag.id === id ? { id, isChecked } : tag))
        : [...state.checkedTags, { id, isChecked }],
    }));
  },
  resetCheckedTags: (resetCheckboxes: () => void) => {
    resetCheckboxes();
    return set({ checkedTags: [] });
  },
}));

const useAuthStore = create<IAuth>((set) => ({
  isLogin: false,
  setIsLogin: (loginState: boolean) => set((state) => ({ ...state, isLogin: loginState })),
}));

const useUserDataStore = create<IUserDataStore>((set) => ({
  userData: { id: '', username: '', email: '', role: '' },
  setUserData: (newUserData: IUserData) => set({ userData: newUserData }),
}));

export { useCheckedTagsStore, useAuthStore, useUserDataStore };
