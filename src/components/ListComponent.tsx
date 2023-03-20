import React from 'react';
import ListItem, {ListItemProp} from "./ListItem";
import {IListItem} from "../interface";


type Prop = {
    className?: string
    title: string
    items: IListItem[]
    onItemClick: (id: number) => void
}
const ListComponent = ({className = '', title, items = [], onItemClick}: Prop) => {
    return (
        <div className="block">
            <div className="flex justify-center items-center w-full px-10 bg-gray-700 h-[60px] ">
                <div
                    className="w-full text-start text-lg font-bold  text-white text-lg font-bold max-w-[900px] ">{title}</div>
            </div>

            <div className="flex justify-center items-center w-full px-10]">
                <div className="flex gap-4 w-full text-start text-lg max-w-[900px] mt-4 ">
                    {items.map(item => <div><ListItem
                        onClick={() => onItemClick(item.id)}
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        coverText={item.coverText}/>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ListComponent;
