import { useState, useEffect } from "react";
import { PreviewImage } from "./MyImages.sc";
import { getTranslations } from "./db/db.js";

export function MyImages() {
  const [imagesAndTranslations, setImagesAndTranslations] = useState();
  const [imageId2Url, setImageId2Url] = useState();

  useEffect(() => {
    const _imagesAndTranslations = {};
    const _imageId2Url = {};
    // dict mapping from image.id => [list of translations associated with that image]

    getTranslations().then((translations) => {
      translations.map((t) => {
        const imageId = t.get("image").id;
        const imageURL = t.get("image").get("file").url();

        if (!_imagesAndTranslations[imageId]) {
          _imagesAndTranslations[imageId] = [];
          _imageId2Url[imageId] = imageURL;
        }

        _imagesAndTranslations[imageId].push(t);
      });

      setImagesAndTranslations(_imagesAndTranslations);
      setImageId2Url(_imageId2Url);
    });
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
