import React from "react";
import ListItem from "./ListItem";
import { IListItem } from "../interface";

type Prop = {
  className?: string;
  title: string;
  items: IListItem[];
  onItemClick: (id: number) => void;
};
const ListComponent = ({
  className = "",
  title,
  items = [],
  onItemClick,
}: Prop) => {
  return (
    <div className={`${className} block`}>
      <div className="flex h-[60px] w-full items-center justify-center bg-gray-700 px-10 ">
        <div className="w-full max-w-[900px] text-start text-lg  text-lg font-bold font-bold text-white ">
          {title}
        </div>
      </div>
      <div className="px-10] flex w-full items-center justify-center">
        <div className="mt-4 grid w-full w-full max-w-[900px] grid-cols-2 gap-4 px-4 text-start text-lg sm:grid-cols-4 md:grid-cols-5 ">
          {items.map((item) => (
            <div key={`item_${item.id}`}>
              <ListItem
                className="h-full w-full"
                onClick={() => onItemClick(item.id)}
                id={item.id}
                title={item.title}
                img={item.image}
                coverText={item.coverText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
