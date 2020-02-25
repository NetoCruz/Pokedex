// import React, { useRef, useEffect } from 'react';

// import { ModalBackground, ModalContainer, Close } from './styles';

// const handleClickOutside = (node, closeModal) => (event) => {
//   if (node && !node.contains(event.target)) closeModal();
// };

// export default function Modal({ open, closeModal, children }) {
//   const ref = useRef();
//   useEffect(() => {
//     const handler = handleClickOutside(ref.current, closeModal);
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   });
//   return (
//     //<ModalBackground  onClick={closeModal}>
//     <ModalContainer open={open} ref={ref}>
//       <Close onClick={closeModal} />
//       {children}
//     </ModalContainer>
//     //</ModalBackground>
//   );
// }

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import posed from "react-pose";

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

const modalBackgroundPoses = {
  open: {
    background: "rgba(0, 0, 0, 0.2)",
    applyAtStart: {
      display: "block"
    }
  },
  closed: {
    background: "rgba(0, 0, 0, 0)",
    applyAtEnd: {
      display: "none"
    }
  }
};

const ModalBackground = styled(posed.div(modalBackgroundPoses))`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const modalPoses = {
  open: {
    opacity: 1,
    transition: {
      opacity: {
        type: "tween",
        duration: 200
      }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: {
        type: "tween",
        duration: 200
      }
    }
  }
};

const Modal = styled(posed.div(modalPoses))`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
`;

export default function({ open, isOpen, toggle, children }) {
  const ref = useRef();

  useOnClickOutside(ref, () => toggle(false));

  return (
    <ModalBackground initialPose="closed" pose={isOpen ? "open" : "closed"}>
      <Modal open={open} ref={ref}>{children}</Modal>
    </ModalBackground>
  );
}
