import create from 'zustand';

interface ICheckedTags {
  checkedTags: Set<string>;
  handleCheckedTags: (name: string, isChecked: boolean) => void;
}

// interface IStore extends ICheckedTags{
//     id: string;
// }

const useStore = create<ICheckedTags>((set) => ({
  checkedTags: new Set<string>(),
  handleCheckedTags: (name: string, isChecked: boolean) =>
    set((state: ICheckedTags) => ({
      checkedTags: isChecked
        ? new Set([...state.checkedTags, name])
        : new Set([...state.checkedTags].filter((curName) => curName !== name)),
    })),
}));

export default useStore;
