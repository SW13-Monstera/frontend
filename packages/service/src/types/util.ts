export interface IDropdownElement {
  id: string;
  name: string;
  color?: string;
}

export interface IModal {
  isModalOpen: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}
