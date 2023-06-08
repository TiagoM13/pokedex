import React, { ReactNode } from 'react';
import Modal from 'react-modal';

import { usePokemonContext } from '@contexts';
import { X } from 'phosphor-react';

interface IModal {
  children: ReactNode;
}

export const ContentModal = ({ children }: IModal) => {
  const { active, handleOnToggleModal } = usePokemonContext();

  return (
    <Modal
      isOpen={active}
      onRequestClose={handleOnToggleModal}
      overlayClassName="overlay-content"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-modal rounded-2xl screen-1x:max-w-[370px] screen-xs:max-w-[340px]"
    >
      <button
        type="button"
        className="absolute right-2 top-2 text-white hover:brightness-90"
        onClick={handleOnToggleModal}
      >
        <X size={25} weight="bold" />
      </button>
      {children}
    </Modal>
  );
};
