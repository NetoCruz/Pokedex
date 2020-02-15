import React, { useRef, useEffect } from 'react';

import { ModalBackground, ModalContainer, Close } from './styles';

const handleClickOutside = (node, closeModal) => (event) => {
  if (node && !node.contains(event.target)) closeModal();
};

export default function Modal({ open, closeModal, children }) {
  const ref = useRef();
  useEffect(() => {
    const handler = handleClickOutside(ref.current, closeModal);
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });
  return (
    //<ModalBackground  onClick={closeModal}>
    <ModalContainer open={open} ref={ref}>
      <Close onClick={closeModal} />
      {children}
    </ModalContainer>
    //</ModalBackground>
  );
}
