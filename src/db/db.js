import Parse, { User } from "parse";

async function getTranslations() {
  const Translation = Parse.Object.extend("Translation");
  const query = new Parse.Query(Translation);
  query.include("image");
  query.notContainedIn("too_easy", [User.current()]);
  query.equalTo("user", Parse.User.current());

  return await query.find();
}

async function getTranslation(id) {
  const Translation = Parse.Object.extend("Translation");
  const query = new Parse.Query(Translation);
  query.include("image");

  return await query.get(id);
}

async function getRandomTranslationBut(id) {
  const Translation = Parse.Object.extend("Translation");
  const query = new Parse.Query(Translation);
  query.include("image");

  let translations = await query.find();

  let randomTranslation =
    translations[Math.floor(Math.random() * translations.length)];
  while (randomTranslation.id === id) {
    randomTranslation =
      translations[Math.floor(Math.random() * translations.length)];
  }

  return randomTranslation;
}

async function getTranslationsForExercises() {
  const Translation = Parse.Object.extend("Translation");
  const query = new Parse.Query(Translation);
  query.include("image");

  query.notContainedIn("too_easy", [User.current()]);

  return await query.find();
}

async function tooEasy(translation) {
  const current_too_easy = translation.get("too_easy") || [];
  current_too_easy.push(User.current());
  translation.set("too_easy", current_too_easy);
  translation.save();
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

export {
  getTranslations,
  uploadImageAndWords,
  tooEasy,
  getTranslationsForExercises,
  getTranslation,
  getRandomTranslationBut,
};
