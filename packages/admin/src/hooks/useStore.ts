import create from 'zustand';

interface IAuthStoreState {
  isLogin: boolean;
}

const useAuthStore = create((set) => ({
  isLogin: false,
  setIsLogin: () => set((state: IAuthStoreState) => ({ isLogin: !state.isLogin })),
}));

export { useAuthStore };
