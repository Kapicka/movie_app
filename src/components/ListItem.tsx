import React from 'react';

export type ListItemProp = {
    id: number,
    className?: string
    img: string
    coverText?: string
    title: string
    onClick?: (arg: any) => void
}
const ListComponent = ({className = '', title = "koko", img, coverText, onClick}: ListItemProp) => {
    return (
        <div onClick={onClick} className="cursor-pointer">
            <div className="w-[150px] h-[200px] relative">
                <img src={img} className="absolute top-0 h-full w-full left-0  bg-cover bg-no-repeat object-cover"/>
                {coverText && <div
                    className="absolute flex items-center justify-center z-10 w-full h-full bg-cover bg-no-repeat bg-black opacity-80">
                    <p className="text-3xl font-bold text-white"> {coverText}</p>
                </div>}
            </div>
            <div>{title}</div>
        </div>
    );
};

export default ListComponent;
