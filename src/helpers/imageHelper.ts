//Fallback image
import fallbackUrl from "../assets/fallbackSm.png";
import fallbackLargeUrl from "../assets/fallbackSm.png";
import fallbackLoadingUrl from "../assets/fallbackLoading.png";
import { IImage } from "../interface";

const defaultFallbackImage = {
  width: 150,
  height: 200,
  url: fallbackUrl,
  srcset: `${fallbackLargeUrl} 400w, ${fallbackUrl} 800w`,
  loadingImage: fallbackLoadingUrl,
  sizes: "(max-width:400) 400px, 150px",
} as IImage;

const getResizedImage = (imageUrl: string, width: number, height?: number) => {
  const url = new URL(imageUrl);
  const size = height ? `${width}px:${height}px` : `${width}px:`;
  url.searchParams.append("resize", size);
  return url.toString();
};
const getSrcSet = (url: string, sizeList: number[]) =>
  sizeList.reduce((acc, size) => {
    return `${acc} ${getResizedImage(url, size)} ${size}w,`;
  }, "");

const loadImage = (image: IImage) => {
  return new Promise((res, rej) => {
    const img = new Image();
    img.src = image.url;
    img.srcset = image.srcset || "";
    img.onload = () => res(img);
    img.onerror = (e) => {
      img.onerror = () => {};
      rej(e);
    };
  });
};

export { defaultFallbackImage, loadImage, getResizedImage, getSrcSet };
