import React from "react";
import closeIcon from "../assets/closeIcon.svg";

type Prop = {
  className?: string;
  children?: React.ReactNode;
  onCloseClick?: () => void;
};
const Modal = ({ children, onCloseClick = () => {} }: Prop) => {
  return (
    <div
      onClick={onCloseClick}
      className="fixed left-0 top-0 z-20  flex h-screen w-screen items-center justify-center bg-black bg-opacity-90"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-full w-full bg-white py-[50px] sm:h-3/4 sm:w-3/4 "
      >
        <div className="absolute top-0 left-0 flex h-[50px] w-full items-center justify-end px-5">
          <button
            onClick={onCloseClick}
            className="h-[20px] w-[20px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${closeIcon}` }}
          />
        </div>
        <div className="overflow-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
