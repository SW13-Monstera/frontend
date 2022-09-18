import create from 'zustand';

interface IAuth {
  isLogin: boolean;
  setIsLogin: (loginState: boolean) => void;
}

interface IDarkMode {
  isDark: boolean;
  toggleIsDark: () => void;
  setIsDark: (isDarkState: boolean) => void;
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
  isDark: false,
  toggleIsDark: () => set((state) => ({ ...state, isDark: !state.isDark })),
  setIsDark: (isDarkState: boolean) => set((state) => ({ ...state, isDark: isDarkState })),
}));

export { useAuthStore, useUserDataStore, useDarkModeStore };
