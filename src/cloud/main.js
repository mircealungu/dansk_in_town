import Parse from "parse";

Parse.Cloud.define("google_translate", async (request) => {
  let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  url += `&format=text&source=da&target=en&q=${encodeURIComponent(
    translation.from
  )}`;

  response = await fetch(url);
  result = await response.json();
  const translated_string = result.data.translations[0].translatedText;
  return translated_string;
});
