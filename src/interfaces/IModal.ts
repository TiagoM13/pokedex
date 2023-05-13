import { ReactNode } from 'react';

export interface IModal {
  children: ReactNode;
  active: boolean;
  onCloseModal: () => void;
}
