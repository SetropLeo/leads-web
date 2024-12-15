import { create } from "zustand";
import { UIStoreActions } from "./UIStore.actions";
import { UIStoreState } from "./UIStore.state";

export const useUIStore = create<UIStoreActions & UIStoreState>((set) => ({
  showConfirmationModal: false,
  setShowConfirmationModal: (show) => set({ showConfirmationModal: show }),
}));
