import { useState, useEffect } from "react";
import { PreviewImage } from "../MyImages.sc";
import { loadImagesAndTranslations } from "./imagesToTranslations";

export function MyImages() {
  const [imagesAndTranslations, setImagesAndTranslations] = useState();
  const [imageId2Url, setImageId2Url] = useState();

  useEffect(() => {
    loadImagesAndTranslations().then(
      ([_imagesAndTranslations, _imageId2Url]) => {
        setImagesAndTranslations(_imagesAndTranslations);
        setImageId2Url(_imageId2Url);
      }
    );
  }, []);

  if (!imagesAndTranslations || !imageId2Url) {
    return "Loading...";
  }

  const imageIds = Object.keys(imagesAndTranslations);
  imageIds.reverse();

  return (
    <>
      My translations oragnized by images are
      {imageIds.map((imageId) => (
        <>
          <PreviewImage src={imageId2Url[imageId]} />
          <ul>
            {imagesAndTranslations[imageId].map((e) => (
              <li>
                {e.get("from")} = {e.get("to")}
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}
