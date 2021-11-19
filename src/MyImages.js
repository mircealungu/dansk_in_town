import { useState, useEffect } from "react";
import { PreviewImage } from "./MyImages.sc";
import { getTranslations } from "./db/db.js";
import { Parse } from "parse";
import { useNavigate } from "react-router-dom";

export function MyImages() {
  const [imagesAndTranslations, setImagesAndTranslations] = useState();
  const [imageId2Url, setImageId2Url] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const _imagesAndTranslations = {};
    const _imageId2Url = {};

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

  if (!Parse.User.current()) {
    navigate("/login");
  }

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
