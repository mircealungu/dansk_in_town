import Parse from "parse";

async function getTranslations() {
  const Translation = Parse.Object.extend("Translation");
  const query = new Parse.Query(Translation);
  query.include("image");

  return await query.find();
}

export { getTranslations };
