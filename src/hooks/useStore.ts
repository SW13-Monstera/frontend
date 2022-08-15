import create from 'zustand';

interface ITag {
  id: string;
  name: string;
}

interface ICheckedTags {
  checkedTags: Set<ITag>;
  handleCheckedTags: (tag: ITag, isChecked: boolean) => void;
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
  checkedTags: new Set<ITag>(),
  handleCheckedTags: (tag: ITag, isChecked: boolean) =>
    set((state: ICheckedTags) => ({
      checkedTags: isChecked
        ? new Set([...state.checkedTags, tag])
        : new Set([...state.checkedTags].filter((currTag) => currTag.id !== tag.id)),
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
