import create from 'zustand';

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

const useAuthStore = create<IAuth>((set) => ({
  isLogin: false,
  setIsLogin: (loginState: boolean) => set((state) => ({ ...state, isLogin: loginState })),
}));

const useUserDataStore = create<IUserDataStore>((set) => ({
  userData: { id: '', username: '', email: '', role: '' },
  setUserData: (newUserData: IUserData) => set({ userData: newUserData }),
}));

export { useAuthStore, useUserDataStore };
