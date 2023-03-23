import React, { useState } from "react";
import { IProgram } from "../interface";
import Modal from "./Modal";
import { getResizedImage, getSrcSet } from "../helpers/imageHelper";
import ImageComponent from "./ImageComponent";
import useFetch from "../useFetch";

type Prop = {
  className?: string;
  program: IProgram;
  onClose?: () => void;
};
const ProgramDetailModal = ({ className = "", onClose, program }: Prop) => {
  const images = Object.values(program.images);
  const mainImage = images[0];
  const [hasImage, setHasImage] = useState<boolean>(!!mainImage);
  const [funFact, loading, error] = useFetch<string>(
    `http://numbersapi.com/${program.releaseYear}/year`
  );

  const getImageProps = () => {
    const sizes = [320, 480, 768, 1024, 1440];
    return {
      url: mainImage.url,
      srcset: getSrcSet(mainImage.url, sizes),
      loadingImage: getResizedImage(
        mainImage.url,
        300,
        300 * (mainImage.height / mainImage.width)
      ),
      width: 300,
    };
  };

  return (
    <Modal onCloseClick={onClose}>
      <div className="px-10">
        <h1 className="mb-10 text-3xl font-bold">{`${program.title} (${program.releaseYear})`}</h1>
        <div className={`${!!mainImage && "sm:flex"} gap-8 `}>
          {hasImage && (
            <div className="mb-8 sm:mb-0 sm:w-[700px]">
              <ImageComponent
                onFetchFailed={() => {
                  setHasImage(false);
                }}
                image={getImageProps()}
              />
            </div>
          )}
          <div>
            <p className="mb-4">{program.description}</p>
            <h2 className="text-2xl font-bold">Fun fact</h2>
            {funFact && <p>{funFact}</p>}
            {loading && (
              <p className=" mt-12 text-xl font-extrabold">
                Loading fun fact...
              </p>
            )}
            {error && (
              <p className=" mt-12 text-xl font-extrabold">
                The fact is, that the fun facts could not be obtained. Try it
                later ;)
              </p>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProgramDetailModal;
