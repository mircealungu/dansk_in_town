import { getTranslations } from "../db/db.js";

export async function loadImagesAndTranslations() {
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

    return [_imagesAndTranslations, _imageId2Url];
  });
}
