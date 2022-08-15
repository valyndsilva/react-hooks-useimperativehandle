import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = (props, ref) => {
  // we don't use props here but we need to pass it to use the ref parameter as the second parameter.
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  console.log("child rendered");

  if (!modalState) return null;

  return (
    <div className="modal">
      <p>This is my modal!</p>
      <button onClick={() => setModalState(false)}>Close</button>
    </div>
  );
};

export default forwardRef(Modal);
