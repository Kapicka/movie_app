import ProgramTypeEnum from "./enum/ProgramTypeEnum";

export interface IListItem {
  id: number;
  title: string;
  image: IImage;
  coverText?: string;
}

export interface IProgram {
  title: string;
  description: string;
  programType: string;
  images: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

export interface IImage {
  url: string;
  width?: number;
  height?: number;
  srcset?: string;
  sizes?: string;
  //placeholder for full size image
  loadingImage?: string;
}
