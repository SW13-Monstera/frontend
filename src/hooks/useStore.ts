import create from 'zustand';

interface ICheckedTags {
  checkedTags: Set<string>;
  handleCheckedTags: (name: string, isChecked: boolean) => void;
}

interface IAuth {
  isLogin: boolean;
  setIsLogin: () => void;
}

const useCheckedTagsStore = create<ICheckedTags>((set) => ({
  checkedTags: new Set<string>(),
  handleCheckedTags: (name: string, isChecked: boolean) =>
    set((state: ICheckedTags) => ({
      checkedTags: isChecked
        ? new Set([...state.checkedTags, name])
        : new Set([...state.checkedTags].filter((curName) => curName !== name)),
    })),
}));

const useAuthStore = create<IAuth>((set) => ({
  isLogin: false,
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
}));

export { useCheckedTagsStore, useAuthStore };
