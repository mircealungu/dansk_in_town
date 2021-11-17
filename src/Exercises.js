import { useEffect, useState } from "react";
import Parse from "parse";

export function Exercises() {
  const [translation, setTranslation] = useState();

  useEffect(() => {
    const Translation = Parse.Object.extend("Translation");
    const query = new Parse.Query(Translation);

    console.log("before the find");
    query.find().then((translations) => {
      console.log(translations);
      const randomWord =
        translations[Math.floor(Math.random() * translations.length)];
      console.log(randomWord.get("from"));
      console.log(randomWord.get("to"));
      setTranslation(randomWord);
    });
  }, []);

  if (!translation) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>
        <b>{translation.get("from")}</b> = ?{" "}
      </h1>
    </>
  );
}
