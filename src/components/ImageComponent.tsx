import React, { useState } from "react";
import { IImage } from "../interface";
import { defaultFallbackImage, loadImage } from "../helpers/imageHelper";

type Prop = {
  className?: string;
  image: IImage;
  onFetchFailed?: () => void;
};
/**
 * Provides functionality to show lower quality image before the full image is fully loaded.
 * @param className
 * @param image
 * @param onFetchFailed
 * @constructor
 */
const ImageComponent = ({
  className = "",
  image,
  onFetchFailed = () => {},
}: Prop) => {
  const defaultImage = image.loadingImage
    ? { url: image.loadingImage, width: image.width, height: image.height }
    : defaultFallbackImage;
  const [showFullImage, setShowFullImage] = useState<boolean>(false);
  const [entered, setEntered] = useState<boolean>(false);
  const [loadingImage, setLoadingImage] = useState<IImage>(defaultImage);
  const [fullImage, setFullImage] = useState<IImage>(image);

  const handleLoadingImageFetchFailed = () => {
    onFetchFailed();
    setLoadingImage({ url: defaultFallbackImage.loadingImage! });
  };

  const handleImageFetchFailed = () => {
    onFetchFailed();
    setLoadingImage({ url: defaultFallbackImage.loadingImage! });
    loadImage(defaultFallbackImage).then(() => {
      setFullImage(defaultFallbackImage);
      setShowFullImage(true);
    });
  };
  const loadFullImage = () => {
    if (!entered) {
      setEntered(true);
      loadImage(image)
        .then(() => {
          setShowFullImage(true);
        })
        .catch((err) => handleImageFetchFailed());
    }
  };

  return (
    <div className={`relative bg-gray-200`}>
      <img
        alt={image.alt || "movie_image"}
        className={`absolute h-full w-full opacity-0 transition-opacity duration-500 ${
          showFullImage && "relative opacity-100"
        }`}
        srcSet={fullImage.srcset}
        src={fullImage.url}
        loading="lazy"
        width={`${fullImage.width}px`}
        height={`${fullImage.height}px`}
      />

      {!showFullImage && (
        <img
          alt={image.alt || "movie_image"}
          onError={handleLoadingImageFetchFailed}
          className={`${className} } blur-sm`}
          width={`${loadingImage.width}px`}
          height={`${loadingImage.height}px`}
          onLoadCapture={loadFullImage}
          loading="lazy"
          src={loadingImage.url}
        />
      )}
    </div>
  );
};
export default ImageComponent;
