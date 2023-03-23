import React from "react";
import { IImage } from "../interface";
import ImageComponent from "./ImageComponent";

export type ListItemProp = {
  id: number;
  className?: string;
  img: IImage;
  coverText?: string;
  title: string;
  onClick?: (arg: any) => void;
};
const ListComponent = ({
  className = "",
  title,
  img,
  coverText,
  onClick,
}: ListItemProp) => {
  return (
    <div
      {...(onClick && { onClick })}
      className={`${className} cursor-pointer`}
    >
      <div className="relative">
        <ImageComponent
          image={img}
          className="h-full w-full  bg-cover bg-no-repeat object-cover"
        />
        {coverText && (
          <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black bg-cover bg-no-repeat opacity-80">
            <p className="text-3xl font-bold text-white"> {coverText}</p>
          </div>
        )}
      </div>
      <div>{title}</div>
    </div>
  );
};

export default ListComponent;
