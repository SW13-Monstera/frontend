import create from 'zustand';

interface IAuth {
  isLogin: boolean;
  setIsLogin: (loginState: boolean) => void;
}

interface IDarkMode {
  isDark: boolean;
  setIsDark: (darkModeState: boolean) => void;
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

const useDarkModeStore = create<IDarkMode>((set) => ({
  isDark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  setIsDark: (darkModeState: boolean) => set((state) => ({ ...state, isDark: darkModeState })),
}));

export { useAuthStore, useUserDataStore, useDarkModeStore };
