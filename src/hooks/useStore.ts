import create from 'zustand';

interface ITag {
  id: string;
  name: string;
}

const tags: ITag[] = [
  { id: 'db', name: '데이터베이스' },
  { id: 'os', name: '운영체제' },
  { id: 'nt', name: '네트워크' },
  { id: 'ds', name: '자료구조' },
];

interface ICheckedTags {
  checkedTags: Set<ITag>;
  handleCheckedTags: (tag: ITag, isChecked: boolean) => void;
}

interface IAuth {
  isLogin: boolean;
  setIsLogin: (loginState: boolean) => void;
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

export { useCheckedTagsStore, useAuthStore };
