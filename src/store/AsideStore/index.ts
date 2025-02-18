import {create} from "zustand/react";

interface AsideStore {
    isAsideOpen: boolean;
    toggleAside: () => void;
}

const useAsideStore = create<AsideStore>((set) => ({
    isAsideOpen: false,
    toggleAside: () => set((state) => ({isAsideOpen: !state.isAsideOpen})),
}));

export default useAsideStore;