import React from "react";
import ListComponent from "./ListComponent";
import { IImage, IListItem, IProgram } from "../interface";
import { defaultFallbackImage, getResizedImage } from "../helpers/imageHelper";

type Prop = {
  className?: string;
  items: IProgram[];
  onSelect: (program: IProgram) => void;
};

const ProgramListComponent = ({ className, items, onSelect }: Prop) => {
  const itemListRef: IListItem[] = [];
  const programMap: Map<Number, IProgram> = new Map<number, IProgram>();
  const handleItemClicked = (id: number) => {
    const program = programMap.get(id);
    if (!program) {
      throw new Error(`Program with id ${id} not found`);
    }
    onSelect(program);
  };

  //Adjust the data form loaded json for the purpose of the listComponent
  for (let [index, program] of items.entries()) {
    programMap.set(index, program);
    const images = Object.values(program.images);
    let image: IImage = defaultFallbackImage;

    if (images[0]) {
      const loadingImage = getResizedImage(images[0].url, 4, 5);
      const imageUrl = getResizedImage(images[0].url, 150, 200);
      image = {
        url: imageUrl,
        sizes: "150",
        loadingImage,
        width: 150,
        height: 200,
      };
    }

    itemListRef.push({
      id: index,
      title: program.title,
      image: image,
    });
  }

  return (
    <div>
      <ListComponent
        {...(className && { className })}
        title="Popular titles"
        items={itemListRef}
        onItemClick={handleItemClicked}
      />
    </div>
  );
};
export default ProgramListComponent;
