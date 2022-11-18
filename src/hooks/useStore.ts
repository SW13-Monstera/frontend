import create from 'zustand';

interface IDarkMode {
  isDark: boolean;
  toggleIsDark: () => void;
  setIsDark: (isDarkState: boolean) => void;
}

const useDarkModeStore = create<IDarkMode>((set) => ({
  isDark: false,
  toggleIsDark: () => set((state) => ({ ...state, isDark: !state.isDark })),
  setIsDark: (isDarkState: boolean) => set((state) => ({ ...state, isDark: isDarkState })),
}));

export { useDarkModeStore };
