import Parse from "parse";

async function getTranslations() {
  const Translation = Parse.Object.extend("Translation");
  const query = new Parse.Query(Translation);
  query.include("image");

  return await query.find();
}

async function uploadImageAndWords(imageFile, translations) {
  const Image = Parse.Object.extend("Image");
  const newImage = new Image();

  const file = new Parse.File(imageFile.name, imageFile);
  newImage.set("file", file);

  return await Promise.all(
    translations.map((translation) => {
      const Translation = Parse.Object.extend("Translation");
      const newTranslation = new Translation();
      newTranslation.set("from", translation.from);
      newTranslation.set("to", translation.to);
      newTranslation.set("user", Parse.User.current());
      newTranslation.set("image", newImage);

      try {
        return newTranslation.save();
      } catch (error) {
        alert(error);
        return Promise.reject("something went wrong");
      }
    })
  );
}

export { getTranslations, uploadImageAndWords };
