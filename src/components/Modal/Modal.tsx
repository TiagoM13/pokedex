import React from 'react';
import Modal from 'react-modal';

import { IModal } from '@interfaces';
import { X } from 'phosphor-react';

export const ContentModal = ({ active, children, onCloseModal }: IModal) => {
  return (
    <Modal
      isOpen={active}
      onRequestClose={onCloseModal}
      overlayClassName="overlay-content"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl animate-modal screen-1x:max-w-[370px] screen-xs:max-w-[340px]"
    >
      <button
        type="button"
        className="absolute right-2 top-2 text-white hover:brightness-90"
        onClick={onCloseModal}
      >
        <X size={25} weight="bold" />
      </button>
      {children}
    </Modal>
  );
};
