import create from 'zustand';

interface IAuthStoreState {
  isLogin: boolean;
}

interface IFilterElement {
  standard: string;
  value: string;
}

interface IFilterState {
  longProblemFilters: IFilterElement[];
  labelingDataFilters: IFilterElement[];
  validatingDataFilters: IFilterElement[];
  doneDataFilters: IFilterElement[];

  addFilter: (filterElement: IFilterElement) => void;
  deleteFilter: (filterElement: IFilterElement) => void;
}

const useAuthStore = create((set) => ({
  isLogin: false,
  setIsLogin: () => set((state: IAuthStoreState) => ({ isLogin: !state.isLogin })),
}));

interface ILabelingDataStore {
  labelingDatas: number[];
  setLabelingDatas: (newDatas: number[]) => void;
  resetLabelingDatas: () => void;
  currPage: number;
  increaseCurrPage: () => void;
  currIndex: number;
  increaseCurrIndex: () => void;
}

// 라벨링 시작했을 때 데이터 id값 리스트
const useLabelingDataStore = (initialDatas: number[]) =>
  create<ILabelingDataStore>((set) => ({
    labelingDatas: [...initialDatas],
    setLabelingDatas: (newDatas: number[]) => set({ labelingDatas: [...newDatas] }),
    resetLabelingDatas: () => set({ labelingDatas: [] }),

    currPage: 0,
    increaseCurrPage: () => set((state) => ({ currPage: state.currPage + 1 })),
    currIndex: 0,
    increaseCurrIndex: () => set((state) => ({ currIndex: state.currIndex + 1 })),
  }));

export { useAuthStore, useLabelingDataStore };
